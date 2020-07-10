import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../../models/request';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
	requests: Request[];

	name: string;
	phone: string;
	location: string;
	sellerId: any;

	effDate = Math.floor(new Date().getTime() / 1000.0);
	expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);

	constructor(
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
	) {
		this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {
		this.requestService.getRequest().subscribe((data) => {
			this.requests = data.map((e) => {
				const effectedTime = new Date(
					e.payload.doc.data()['effectedTime'] * 1000,
				).toLocaleString();
				const expireDate = new Date(
					e.payload.doc.data()['expireDate'] * 1000,
				).toLocaleString();
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Request),
				};
			});
		});
	}

	async createRequest() {
		const Request = {};

		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		Request['sellerName'] = this.name;
		Request['phone'] = this.phone;
		Request['location'] = this.location;
		Request['effectedTime'] = this.effDate;
		Request['expireDate'] = this.expDate;
		Request['sellerId'] = this.sellerId;

		try {
			await loading.present();
			this.requestService
				.createRequest(Request)
				.then((res) => {
					this.name = '';
					this.phone = '';
					this.location = '';
					this.sellerId = '';
					this.toast.showToast('Your request is successfully uploaded!');
				})
				.catch((error) => {
					this.toast.showToast(error.message);
				});
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

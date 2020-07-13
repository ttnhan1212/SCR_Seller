import { ToastService } from './../../../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { RequestService } from 'src/app/services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-platenumber',
	templateUrl: './platenumber.page.html',
	styleUrls: ['./platenumber.page.scss'],
})
export class PlatenumberPage implements OnInit {
	plate: string;
	constructor(
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
	) {}

	ngOnInit() {}

	async createRequest() {
		// const Request = {};

		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		Request['platenumber'] = this.plate;

		try {
			await loading.present();
			await this.requestService
				.createRequest(Request)
				.then((res) => {
					this.plate = '';
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

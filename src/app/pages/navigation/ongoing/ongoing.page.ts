import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../../models/request';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit, OnDestroy {
	requests: Request[];
	requestSub: Subscription;

	logo: any;

	constructor(
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService
	) {
		// this.sellerId = JSON.parse(localStorage.getItem("user")).uid;
		this.logo = '../../../assets/images/logo/scroadslight.svg';
	}

	ngOnInit() {
		this.requestSub = this.requestService.getRequest().subscribe((data) => {
			this.requests = data.map((e) => {
				const effectedTime = new Date(
					e.payload.doc.data()['effectedTime'] * 1000
				).toLocaleString();
				const expireDate = new Date(
					e.payload.doc.data()['expireDate'] * 1000
				).toLocaleString();
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Request),
				};
			});
		});
	}

	ngOnDestroy() {
		if (this.requestSub) {
			this.requestSub.unsubscribe();
		}
	}
}

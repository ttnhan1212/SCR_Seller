import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	logo: string;
	constructor(
		public afAuth: AngularFireAuth,
		public router: Router,
		public loadingController: LoadingController,
		public toast: ToastService,
	) {
		this.logo = '../../../assets/images/banners/logo/scroadslight.svg';
	}

	ngOnInit() {}

	async anonyLogin() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		try {
			await loading.present();
			await this.afAuth.signInAnonymously();
			this.router.navigate(['home/request']);
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

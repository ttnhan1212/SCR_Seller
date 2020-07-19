import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators,
} from '@angular/forms';
import { SellerService } from './../../../services/seller.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	logo: string;
	name: string;

	createDate = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		public loadingController: LoadingController,
		public toast: ToastService,
		public authService: AuthService,
		public afAuth: AngularFireAuth,
		public sellerService: SellerService,
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
			await this.authService.loginAny();
			await this.afAuth.onAuthStateChanged((user) => {
				if (user) {
					this.sellerService.createSeller({
						seller_name: this.name,
						uid: user.uid,
						create_date: this.createDate,
					});
				}
			});
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

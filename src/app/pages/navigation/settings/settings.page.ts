import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from '../../../services/toast.service';
import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	panelOpenState = false;
	constructor(
		private toast: ToastService,
		private router: Router,
		private afAuth: AngularFireAuth,
		public loadingController: LoadingController,
	) {}

	ngOnInit() {}

	async logOut() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		try {
			await loading.present();
			await this.afAuth.signOut();
			this.router.navigate(['login']);
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

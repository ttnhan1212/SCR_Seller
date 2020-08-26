import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	panelOpenState = false;

	logo: any;
	constructor(
		private toast: ToastService,
		public loadingController: LoadingController,
		public authService: AuthService,
		private translate: TranslateService,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {}

	// async logOut() {
	// 	const loading = await this.loadingController.create({
	// 		message: "Please wait...",
	// 		showBackdrop: true,
	// 	});
	// 	try {
	// 		await loading.present();
	// 		this.authService.logout();
	// 		await loading.dismiss();
	// 	} catch (error) {
	// 		this.toast.showToast(error.message);
	// 		await loading.dismiss();
	// 	}
	// }
}

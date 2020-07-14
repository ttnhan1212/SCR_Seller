import { AuthService } from "./../../../services/auth.service";
import { ToastService } from "../../../services/toast.service";
import { Component, OnInit } from "@angular/core";

import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.page.html",
	styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
	panelOpenState = false;

	logo: any;
	constructor(
		private toast: ToastService,
		public loadingController: LoadingController,
		public authService: AuthService
	) {
		this.logo = "../../../assets/images/logo/scroadslight.svg";
	}

	ngOnInit() {}

	async logOut() {
		const loading = await this.loadingController.create({
			message: "Please wait...",
			showBackdrop: true,
		});
		try {
			await loading.present();
			this.authService.logout();
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

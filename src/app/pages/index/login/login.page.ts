import { AuthService } from "./../../../services/auth.service";
import { Component, OnInit } from "@angular/core";

import { LoadingController } from "@ionic/angular";
import { ToastService } from "src/app/services/toast.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	logo: string;
	constructor(
		public loadingController: LoadingController,
		public toast: ToastService,
		public authService: AuthService
	) {
		this.logo = "../../../assets/images/banners/logo/scroadslight.svg";
	}

	ngOnInit() {}

	async anonyLogin() {
		const loading = await this.loadingController.create({
			message: "Please wait...",
			showBackdrop: true,
		});
		try {
			await loading.present();
			this.authService.loginAny();
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

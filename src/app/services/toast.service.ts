import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root',
})
export class ToastService {
	private myToast: any;
	constructor(public toast: ToastController) {}

	showToast(message: string) {
		this.myToast = this.toast
			.create({
				message,
				duration: 2500,
			})
			.then((toastData) => {
				toastData.present();
			});
	}

	HideToast() {
		this.myToast = this.toast.dismiss();
	}
}

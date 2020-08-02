import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-privacypolicy',
	templateUrl: './privacypolicy.page.html',
	styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {
	constructor(private modalController: ModalController) {}

	ngOnInit() {}

	async closePrivatePolicyModal() {
		await this.modalController.dismiss();
	}
}

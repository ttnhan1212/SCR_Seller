import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-puagreement',
	templateUrl: './puagreement.page.html',
	styleUrls: ['./puagreement.page.scss'],
})
export class PuagreementPage implements OnInit {
	constructor(private modalController: ModalController) {}

	ngOnInit() {}

	async closePuaModal() {
		await this.modalController.dismiss();
	}
}

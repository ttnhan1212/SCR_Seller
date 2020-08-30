import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-puagreement',
	templateUrl: './puagreement.page.html',
	styleUrls: ['./puagreement.page.scss'],
})
export class PuagreementPage implements OnInit {
	constructor(
		private modalController: ModalController,
		translate: TranslateService,
	) {
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {}

	async closePuaModal() {
		await this.modalController.dismiss();
	}
}

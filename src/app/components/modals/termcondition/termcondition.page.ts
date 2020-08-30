import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-termcondition',
	templateUrl: './termcondition.page.html',
	styleUrls: ['./termcondition.page.scss'],
})
export class TermconditionPage implements OnInit {
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

	async closeTermCondition() {
		await this.modalController.dismiss();
	}
}

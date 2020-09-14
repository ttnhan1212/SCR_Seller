import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-infor',
	templateUrl: './infor.page.html',
	styleUrls: ['./infor.page.scss'],
})
export class InforPage implements OnInit {
	constructor(private translate: TranslateService) {
		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {}
}

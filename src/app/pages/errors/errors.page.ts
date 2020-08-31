import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-errors',
	templateUrl: './errors.page.html',
	styleUrls: ['./errors.page.scss'],
})
export class ErrorsPage implements OnInit {
	constructor(public router: Router, private translate: TranslateService) {
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {}

	navigateHome() {
		this.router.navigate(['home', 'seller']);
	}
}

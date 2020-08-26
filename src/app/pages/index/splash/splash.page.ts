import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.page.html',
	styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
	logo: any;
	image: any;
	constructor(private router: Router, private translate: TranslateService) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = '../../../../assets/images/photos/OBC8OG0.jpg';

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		setTimeout(() => {
			this.router.navigate(['welcome']);
		}, 3000);
	}
}

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-image-guide',
	templateUrl: './image-guide.page.html',
	styleUrls: ['./image-guide.page.scss'],
})
export class ImageGuidePage implements OnInit {
	requestId: string;

	constructor(private router: Router, public route: ActivatedRoute, private translate: TranslateService,) {
		this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.requestId = this.router.getCurrentNavigation().extras.state.requestId;
			}
		});
		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	requestDetail() {
		this.router.navigate(['/', 'request', this.requestId]);
	}

	ngOnInit() {}
}

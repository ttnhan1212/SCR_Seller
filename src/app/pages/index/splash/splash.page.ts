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
	constructor(private router: Router) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image =
			'../../../../assets/images/photos/81336832_497842197508775_1794897267136659456_o.jpg';
	}

	ngOnInit() {
		setTimeout(() => {
			this.router.navigate(['/', 'welcome']);
		}, 3500);
	}
}

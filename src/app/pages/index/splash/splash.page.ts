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
		this.image = '../../../../assets/images/photos/OBC8OG0.jpg';
	}

	ngOnInit() {
		setTimeout(() => {
			this.router.navigate(['welcome']);
		}, 3000);
	}
}

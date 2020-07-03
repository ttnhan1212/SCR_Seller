import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-errors',
	templateUrl: './errors.page.html',
	styleUrls: ['./errors.page.scss'],
})
export class ErrorsPage implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {}

	navigateHome = () => {
		this.router.navigate(['home/request']);
	};
}

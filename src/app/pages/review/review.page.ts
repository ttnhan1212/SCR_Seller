import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-review',
	templateUrl: './review.page.html',
	styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
	rate: undefined;

	constructor() {}

	ngOnInit() {}

	onRate() {
		console.log(this.rate);
	}
}

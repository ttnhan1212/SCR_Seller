import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-guide',
	templateUrl: './image-guide.page.html',
	styleUrls: ['./image-guide.page.scss'],
})
export class ImageGuidePage implements OnInit {
	requestId: string;
	requestSellerId: string;

	requestState: NavigationExtras;

	constructor(private router: Router, public route: ActivatedRoute) {
		this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.requestId = this.router.getCurrentNavigation().extras.state.requestId;
				this.requestSellerId = this.router.getCurrentNavigation().extras.state.requestSellerId;
			}
		});
	}

	requestDetail() {
		this.requestState = {
			state: {
				requestSellerId: this.requestSellerId,
			},
		};
		this.router.navigate(['/', 'request', this.requestId], this.requestState);
	}

	ngOnInit() {}
}

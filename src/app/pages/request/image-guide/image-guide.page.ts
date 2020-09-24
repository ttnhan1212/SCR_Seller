import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-guide',
	templateUrl: './image-guide.page.html',
	styleUrls: ['./image-guide.page.scss'],
})
export class ImageGuidePage implements OnInit {
	requestId: string;

	constructor(private router: Router, public route: ActivatedRoute) {
		this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.requestId = this.router.getCurrentNavigation().extras.state.requestId;
			}
		});
	}

	requestDetail() {
		this.router.navigate(['/', 'request', this.requestId]);
	}

	ngOnInit() {}
}

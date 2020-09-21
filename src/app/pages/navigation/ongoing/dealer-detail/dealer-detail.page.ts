import { LoaderService } from './../../../../services/loader.service';
import { RequestService } from './../../../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from './../../../../services/dealer.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dealer-detail',
	templateUrl: './dealer-detail.page.html',
	styleUrls: ['./dealer-detail.page.scss'],
})
export class DealerDetailPage implements OnInit {
	id: string;
	dealer: any;
	review: any[];
	request: any;

	partId: string;
	dealerId: string;

	dataSub: Subscription;

	now = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		public dealerService: DealerService,
		public requestService: RequestService,
		public route: ActivatedRoute,
		public router: Router,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.dataSub = this.route.queryParams.subscribe(() => {
			const state = this.router.getCurrentNavigation().extras.state;
			if (state) {
				this.partId = this.router.getCurrentNavigation().extras.state.partId;
				this.dealerId = this.router.getCurrentNavigation().extras.state.dealerId;
			}
		});
	}

	ngOnInit() {
		this.getRequest();
		setTimeout(() => {
			this.getDealer();
			this.getDealerReview();
		}, 1000);
	}

	getDealer() {
		this.dealerService.getDealer(this.dealerId).subscribe((val) => {
			this.dealer = val.payload.data();
		});
	}

	getDealerReview() {
		this.dealerService.getDealerReview(this.dealerId).subscribe((val) => {
			this.review = val.map((rev) => {
				return {
					...rev.payload.doc.data(),
				};
			});

			this.review.forEach((res) => {
				this.requestService
					.getRequestById(res.requestId)
					.subscribe((m: any) => {
						res.revRequest = { ...m.payload.data() };
					});
			});

			let star = [];
			star = val.map((m) => {
				return m.payload.doc.data()['star'];
			});
			const sumStar = star.reduce((a, b) => a + b, 0);
			const averStar = Math.floor(sumStar / star.length);
			this.dealer.averStar = averStar;
			
			console.log(this.review);
			console.log(this.dealer);
		});
	}

	getRequest() {
		this.requestService.getRequestById(this.id).subscribe((val) => {
			this.request = val.payload.data();
			console.log(this.request);
		});
	}

	async selectDealer() {
		await this.requestService.updateRequest(this.id, {
			status: 3,
		});
		await this.requestService.updateParticipant(this.id, this.partId, {
			selected: true,
		});
		this.router.navigate(['/', 'home', 'ongoing', this.id]);
	}
}

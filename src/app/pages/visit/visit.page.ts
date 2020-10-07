import { LoaderService } from './../../services/loader.service';
import { DealerService } from './../../services/dealer.service';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-visit',
	templateUrl: './visit.page.html',
	styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
	id: string;
	request: any = {};
	dealer: any = {};
	part: any = [];
	review: any[];

	myValueSub: Subscription;
	dealerSub: Subscription;
	partSub: Subscription;
	constructor(
		public route: ActivatedRoute,
		public requestService: RequestService,
		public dealerService: DealerService,
		public loader: LoaderService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getRequestById();
	}

	async getRequestById() {
		await this.loader.showLoader();
		this.myValueSub = await this.requestService
			.getRequestById(this.id)
			.subscribe((data: any) => {
				this.request = {
					...data.payload.data(),
				};
				this.part = this.request.participants;
				console.log(this.request);
				console.log(this.part);

				this.getParticipant();
				this.loader.hideLoader();
			});
	}

	async getParticipant() {
		this.dealerSub = await this.dealerService
			.getDealer(this.request.participants[0])
			.subscribe((res: any) => {
				this.dealer = { ...res.payload.data() };
				console.log(this.dealer);
			});

		this.dealerService
			.getDealerReview(this.request.participants[0])
			.subscribe((val) => {
				this.review = val.map((m) => {
					return {
						...m.payload.doc.data(),
					};
				});

				this.review.forEach((res) => {
					this.requestService
						.getRequestById(res.requestId)
						.subscribe((m: any) => {
							res.revRequest = { ...m.payload.data() };
						});
				});

				let allStar = [];
				allStar = val.map((n) => {
					return n.payload.doc.data()['star'];
				});
				const sumStar = allStar.reduce((a, b) => a + b, 0);
				const averStar = Math.floor(sumStar / allStar.length);
				this.dealer.averStar = averStar;
			});
	}

	ngOnDestroy() {
		if (this.myValueSub) {
			this.myValueSub.unsubscribe();
		}

		if (this.dealerSub) {
			this.dealerSub.unsubscribe();
		}
	}
}

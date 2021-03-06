import { LoaderService } from './../../../../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { RequestService } from '../../../../services/request.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DealerService } from 'src/app/services/dealer.service';

@Component({
	selector: 'app-ongoing-detail',
	templateUrl: './ongoing-detail.page.html',
	styleUrls: ['./ongoing-detail.page.scss'],
})
export class OngoingDetailPage implements OnInit {
	id: string;
	ongoing: any = {};
	participants: any = [];
	dealer = {};
	selectedDealer: any;

	now = Math.floor(new Date().getTime() / 1000.0);

	priceArray: any[];
	total: number;
	min: number;
	max: number;
	average: number;

	myValueSub: Subscription;
	dealerSub: Subscription;
	partSub: Subscription;
	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public requestService: RequestService,
		public dealerService: DealerService,
		private translate: TranslateService,
		private loader: LoaderService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {
		this.getRequestById();
		this.getParticipant();
		// this.selectedRequest();
	}

	async getRequestById() {
		await this.loader.showLoader();
		await this.requestService.getRequestById(this.id).subscribe((data: any) => {
			this.ongoing = {
				...data.payload.data(),
			};
			console.log('Ongoing', this.ongoing);
			this.loader.hideLoader();
		});
	}

	async getParticipant() {
		await this.requestService.getParticipant(this.id).subscribe((val) => {
			this.participants = val.map((m) => {
				return {
					id: m.payload.doc.id,
					...m.payload.doc.data(),
				};
			});
			this.priceArray = val.map((price) => {
				return price.payload.doc.data()['price'];
			});

			this.participants.forEach((participant: any) => {
				this.dealerService
					.getDealer(participant.userId)
					.subscribe((res: any) => {
						participant.dealer = { ...res.payload.data() };
					});
				this.dealerService
					.getDealerReview(participant.userId)
					.subscribe((val) => {
						let allStar = [];
						allStar = val.map((star) => {
							return star.payload.doc.data()['star'];
						});
						const sumStar: number = allStar.reduce((a, b) => a + b, 0);
						const averStar: number = Math.round(sumStar / allStar.length);
						participant.dealer = {
							...participant.dealer,
							averStar,
						};
					});
			});

			this.sum();
			this.average = Math.round(this.total / this.priceArray.length);
			this.max = this.priceArray.reduce((a, b) => Math.max(a, b));
			this.min = this.priceArray.reduce((a, b) => Math.min(a, b));

			this.selectedRequest();
			console.log('Part', this.participants);
			console.log(this.participants.length);
			console.log(this.priceArray);
			console.log(this.min, this.max, this.average);
		});
	}

	sum() {
		this.total = this.priceArray.reduce((a, b) => a + b, 0);
	}

	async selectDealer(user) {
		await this.requestService.updateRequest(this.id, {
			status: 3,
		});
		await this.requestService.updateParticipant(this.id, user, {
			selected: true,
		});
	}

	async selectedRequest() {
		await this.requestService.selectedRequest(this.id).subscribe((val) => {
			if (val) {
				this.selectedDealer = val[0];
				this.dealerService
					.getDealer(this.selectedDealer.userId)
					.subscribe((res: any) => {
						this.selectedDealer.dealer = { ...res.payload.data() };
					});

				this.dealerService
					.getDealerReview(this.selectedDealer.userId)
					.subscribe((val) => {
						let review = [];
						review = val.map((m) => {
							return m.payload.doc.data()['star'];
						});
						const sumStar = review.reduce((a, b) => a + b, 0);
						const averStar = Math.floor(sumStar / review.length);
						this.selectedDealer.dealer.averStar = averStar;
					});
				console.log('select', this.selectedDealer);
			}
		});
	}

	getDealerDetail(partId: string, dealerId: string) {
		const extraState: NavigationExtras = {
			state: {
				partId: partId,
				dealerId: dealerId,
			},
		};
		this.router.navigate(
			['/', 'home', 'ongoing', 'dealer-detail', this.id],
			extraState,
		);
	}

	checkArray() {
		return Array.isArray(this.ongoing.participants);
	}
}

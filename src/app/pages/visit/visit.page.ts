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

	myValueSub: Subscription;
	dealerSub: Subscription;
	partSub: Subscription;
	constructor(
		public route: ActivatedRoute,
		public requestService: RequestService,
		public dealerService: DealerService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getRequestById();
	}

	async getRequestById() {
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
			});
	}

	async getParticipant() {
		this.dealerSub = await this.dealerService
			.getDealer(this.request.participants[0])
			.subscribe((res: any) => {
				this.dealer = { ...res.payload.data() };
				console.log(this.dealer);
			});
	}

	localeDate(time) {
		let myDate = new Date(time * 1000);
		return myDate.toLocaleString();
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

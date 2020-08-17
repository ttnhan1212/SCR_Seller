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
	ongoing = {};
	participants: any = {};
	dealer: any = {};

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
		this.getParticipant();
	}

	async getRequestById() {
		this.myValueSub = await this.requestService
			.getRequestById(this.id)
			.subscribe((data) => {
				this.ongoing = {
					name: data.payload.data()['name'],
				};
			});
	}

	async getParticipant() {
		this.dealerSub = await this.requestService
			.getRequestById(this.id)
			.subscribe((val) => {
				this.participants = val.payload.data();
				console.log('Part', this.participants);

				this.dealerService
					.getDealer(this.participants.participants[0])
					.subscribe((res: any) => {
						this.dealer = { ...res.data() };
						console.log('Dealer', this.dealer);
					});
			});
	}

	ngOnDestroy() {
		if (this.myValueSub) {
			this.myValueSub.unsubscribe();
		}

		if (this.dealerSub) {
			this.dealerSub.unsubscribe();
		}

		if (this.partSub) {
			this.partSub.unsubscribe();
		}
	}
}

import { Request } from '../../models/request';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DealerService } from 'src/app/services/dealer.service';

@Component({
	selector: 'app-ongoing-detail',
	templateUrl: './ongoing-detail.page.html',
	styleUrls: ['./ongoing-detail.page.scss'],
})
export class OngoingDetailPage implements OnInit, OnDestroy {
	id: string;
	ongoing = {};
	participants: any = [];
	dealer = {};

	myValueSub: Subscription;
	dealerSub: Subscription;
	partSub: Subscription;
	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public requestService: RequestService,
		public dealerService: DealerService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.myValueSub = this.requestService
			.getRequestById(this.id)
			.subscribe((data) => {
				this.ongoing = {
					name: data.payload.data()['name'],
				};
			});

		this.dealerSub = this.requestService
			.getParticipant(this.id)
			.subscribe((val) => {
				this.participants = val.map((m) => {
					return {
						bidTime: m.payload.doc.data()['bidTime'],
						price: m.payload.doc.data()['price'],
						user: m.payload.doc.data()['userId'],
					};
				});

				this.partSub = this.participants.forEach((participant: any) => {
					this.dealerService
						.getDealer(participant.user)
						.subscribe((res: any) => {
							participant.dealer = { ...res.data() };
						});
				});
			});
	}

	ngOnDestroy() {
		if (this.myValueSub && this.dealerSub && this.partSub) {
			this.myValueSub.unsubscribe();
			this.dealerSub.unsubscribe();
			this.partSub.unsubscribe();
		}
	}
}

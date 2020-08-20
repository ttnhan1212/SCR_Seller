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
export class OngoingDetailPage implements OnInit, OnDestroy {
	id: string;
	ongoing = {};
	participants: any = [];
	dealer = {};
	selectedDealer: any;

	myValueSub: Subscription;
	dealerSub: Subscription;
	partSub: Subscription;
	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public requestService: RequestService,
		public dealerService: DealerService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getRequestById();
		this.getParticipant();
		this.selectedRequest();
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
			.getParticipant(this.id)
			.subscribe((val) => {
				this.participants = val.map((m) => {
					return {
						id: m.payload.doc.id,
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
				console.log(this.participants);
			});
	}

	selectDealer(user) {
		this.requestService.updateParticipant(this.id, user, {
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
						this.selectedDealer.dealer = { ...res.data() };
					});
			}
		});
	}

	getDealerDetail(id: string, partId: string) {
		const extraState: NavigationExtras = {
			state: {
				requestId: id,
				participantsId: partId,
			},
		};
		this.router.navigate(
			['/', 'home', 'ongoing', 'dealer-detail', id],
			extraState
		);
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

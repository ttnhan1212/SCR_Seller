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
		await this.requestService.getRequestById(this.id).subscribe((data: any) => {
			this.ongoing = {
				...data.payload.data(),
			};
			console.log('Ongoing', this.ongoing);
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

			this.participants.forEach((participant: any) => {
				this.dealerService
					.getDealer(participant.userId)
					.subscribe((res: any) => {
						participant.dealer = { ...res.payload.data() };
					});
			});
			console.log('Part', this.participants);
		});
	}

	async selectDealer(user) {
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
			extraState
		);
	}
}

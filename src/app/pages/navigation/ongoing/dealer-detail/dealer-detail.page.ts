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
	participant: any;

	partId: string;
	dealerId: string;

	dataSub: Subscription;

	constructor(
		public dealerService: DealerService,
		public requestService: RequestService,
		public route: ActivatedRoute,
		public router: Router
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.dataSub = this.route.queryParams.subscribe(() => {
			const state = this.router.getCurrentNavigation().extras.state;
			if (state) {
				console.log(state);

				this.partId = this.router.getCurrentNavigation().extras.state.partId;
				this.dealerId = this.router.getCurrentNavigation().extras.state.dealerId;
			}
		});
	}

	ngOnInit() {
		setTimeout(() => {
			this.getDealer();
		}, 1000);
	}

	getDealer() {
		this.dealerService.getDealer(this.dealerId).subscribe((val) => {
			this.dealer = val.payload.data();
			console.log('Dealer', this.dealer);
		});
	}

	async selectDealer() {
		await this.requestService.updateParticipant(this.id, this.partId, {
			selected: true,
		});
		this.router.navigate(['/', 'home', 'ongoing', this.id]);
	}
}

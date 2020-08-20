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

	participants: any;

	dataSub: Subscription;
	constructor(
		public dealerService: DealerService,
		public requestService: RequestService,
		public route: ActivatedRoute,
		public router: Router
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		this.dataSub = this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.participants = this.router.getCurrentNavigation().extras.state.participantsId;
			}
		});
	}

	ngOnInit() {
		setTimeout(() => {
			this.getDealer();
		}, 1000);
	}

	async getDealer() {
		await this.dealerService.getDealer(this.participants).subscribe((val) => {
			this.dealer = val.data();
			console.log(this.dealer);
		});
	}

	selectDealer(user) {
		this.requestService.updateParticipant(this.id, user, {
			selected: true,
		});
	}
}

import { AdsModalComponent } from './../navigation/modal/ads-modal/ads-modal.component';
import { ModalController } from '@ionic/angular';
import { DealerService } from './../../services/dealer.service';
import { LoaderService } from './../../services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-review',
	templateUrl: './review.page.html',
	styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
	id: string;

	rate: undefined;
	review: string;

	request: any;
	dealer: any;

	constructor(
		public requestService: RequestService,
		public dealerService: DealerService,
		public route: ActivatedRoute,
		public router: Router,
		private loader: LoaderService,
		private modalCtrl: ModalController,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getRequestById();
		setTimeout(() => {
			this.openAds();
		}, 2000);
	}

	async openAds() {
		const modal = await this.modalCtrl.create({
			component: AdsModalComponent,
		});

		await modal.present();
	}

	async getRequestById() {
		await this.loader.showLoader();
		await this.requestService.getRequestById(this.id).subscribe((data: any) => {
			this.request = {
				...data.payload.data(),
			};
			this.getDealer(this.request.participants[0]);
			console.log('Ongoing', this.request);
			this.loader.hideLoader();
		});
	}

	async getDealer(id: string) {
		await this.dealerService.getDealer(id).subscribe((data: any) => {
			this.dealer = {
				...data.payload.data(),
			};
			console.log('Dealer', this.dealer);
		});
	}

	async submitReview() {
		await this.loader.showLoader();
		await this.dealerService.createReviewInDealer(
			this.request.participants[0],
			{
				star: this.rate,
				review: this.review,
				requestId: this.id,
			},
		);
		await this.requestService.createReview({
			star: this.rate,
			review: this.review,
			requestId: this.id,
			dealerId: this.request.participants[0],
		});
		await this.requestService.updateRequest(this.id, {
			reviewed: true,
			expired: true,
			status: 9,
		});
		await this.loader.hideLoader();
		await this.router.navigate(['/', 'home', 'seller']);
	}
}

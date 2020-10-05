import { AdsService } from './../../../../services/ads.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ads-modal',
	templateUrl: './ads-modal.component.html',
	styleUrls: ['./ads-modal.component.scss'],
})
export class AdsModalComponent implements OnInit {
	ads = [];

	length: number;
	randomInt: number;

	now = Math.floor(new Date().getTime() / 1000);

	constructor(
		private modalCtrl: ModalController,
		private adsService: AdsService,
	) {}

	ngOnInit() {
		this.getAds();
	}

	async getAds() {
		await this.adsService.getAds().subscribe((val) => {
			const temp = val.map((res) => {
				return {
					...(res.payload.doc.data() as any),
				};
			});

			temp.forEach((data) => {
				if (
					data.ads_period_start < this.now &&
					data.ads_period_end > this.now
				) {
					this.ads.push(data);
				}
			});

			this.getRandomInt(this.ads.length);
		});
	}

	async getRandomInt(num) {
		this.randomInt = await Math.floor(Math.random() * (num + 1));
	}

	dismissModal() {
		this.modalCtrl.dismiss();
	}
}

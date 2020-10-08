import { LoaderService } from './../../../services/loader.service';
import { RequestService } from './../../../services/request.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { DealerService } from 'src/app/services/dealer.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	id: string;
	dealerId: string;
	image: any;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	review: any;

	constructor(
		private dealer: DealerService,
		private request: RequestService,
		private route: ActivatedRoute,
		private afAuth: AngularFireAuth,
		public loader: LoaderService,
		private translate: TranslateService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		this.image =
			'../../../../assets/images/photos/KakaoTalk_Photo_2020-09-22-09-31-57.png';

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.loader.showLoader();
		await this.afAuth.currentUser.then((user) => {
			if (user) {
				this.dealerId = user.uid;
				this.getReview();
			}
			this.loader.hideLoader();
		});
	}

	getReview() {
		this.dealer.getReviewDetail(this.id).subscribe((val) => {
			this.review = val.payload.data();

			this.request.getRequestById(this.review.requestId).subscribe((m) => {
				this.review.request = m.payload.data();
			});

			this.dealer.getDealer(this.review.dealerId).subscribe((n) => {
				this.review.dealer = n.payload.data();
			});
		});
	}
}

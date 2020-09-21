import { LoaderService } from './../../../services/loader.service';
import { RequestService } from './../../../services/request.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { DealerService } from 'src/app/services/dealer.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	id: string;
	dealerId: string;
	image: any;

	star: number = 5;

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
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		this.image = '../../../../assets/images/banners/banner2.jpg';
	}

	ngOnInit() {
		this.getUser();
	}

	getUser() {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.dealerId = user.uid;
				this.getReview();
			}
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

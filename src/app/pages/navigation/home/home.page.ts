import { AdsModalComponent } from '../modal/ads-modal/ads-modal.component';
import { ModalController } from '@ionic/angular';
import { DealerService } from 'src/app/services/dealer.service';
import { RequestService } from 'src/app/services/request.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ModelService } from './../../../services/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from '../../../models/model';
import { Router, NavigationExtras } from '@angular/router';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';

@Component({
	selector: 'app-request',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	models: Model[];
	modelSub: Subscription;
	yearSub: Subscription;

	years = [];

	exportForm: FormGroup;
	model = new FormControl('', [Validators.required]);
	year = new FormControl(null, [Validators.required]);

	logo: any;
	image: any;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	review_all: any[];
	request: any;

	constructor(
		private modelService: ModelService,
		public router: Router,
		private fb: FormBuilder,
		private translate: TranslateService,
		public requestService: RequestService,
		public dealerService: DealerService,
		private modalCtrl: ModalController,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = '../../../../assets/images/photos/31887.jpg';

		this.exportForm = this.fb.group({
			model: this.model,
			year: this.year,
		});

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {
		this.getModel();
		this.reviewSection();
		setTimeout(() => {
			this.openAds();
		}, 3000);
	}

	async openAds() {
		const modal = await this.modalCtrl.create({
			component: AdsModalComponent,
		});

		await modal.present();
	}

	getModel() {
		this.modelSub = this.modelService.getModel().subscribe(
			(data: any) => {
				this.models = data.map((e) => {
					return {
						id: e.payload.doc.id,
						...(e.payload.doc.data() as Model),
					};
				});
			},
			(error: any) => {
				console.log(error);
			},
		);
	}

	async reviewSection() {
		await this.requestService.getAllReview().subscribe((val: any) => {
			this.review_all = val.map((m) => {
				return {
					id: m.payload.doc.id,
					...m.payload.doc.data(),
				};
			});
			this.review_all.forEach((n) => {
				this.requestService.getRequestById(n.requestId).subscribe((v) => {
					if (v.payload.data()['finalPrice']) {
						n.finalPrice = v.payload.data()['finalPrice'];
					} else {
						n.finalPrice = 0;
					}
				});
			});
			console.log(this.review_all);
		});
	}

	async fetchYear(e: any) {
		this.exportForm.patchValue({
			year: null,
		});
		this.modelService.getModelYear(e.target.value).subscribe(
			(data) => {
				this.years = data.map((m) => {
					return {
						...m.payload.doc.data(),
					};
				});
			},
			(err: any) => {
				console.log(err);
			},
		);
	}

	async exportSubmit() {
		const exportState: NavigationExtras = {
			state: {
				export: this.exportForm.value,
			},
		};
		// Do useful stuff with the gathered data
		this.router.navigate(['/', 'home', 'export'], exportState);
		this.exportForm.reset();
	}
}

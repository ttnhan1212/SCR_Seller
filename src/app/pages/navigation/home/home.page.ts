import { Subscription } from 'rxjs';
import { ModelService } from './../../../services/model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HomePage implements OnInit, OnDestroy {
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

	constructor(
		private modelService: ModelService,
		public router: Router,
		private fb: FormBuilder,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = '../../../../assets/images/banners/banner2.jpg';

		this.exportForm = this.fb.group({
			model: this.model,
			year: this.year,
		});
	}

	ngOnInit() {
		this.getModel();
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

	ngOnDestroy() {
		if (this.modelSub && this.yearSub) {
			this.modelSub.unsubscribe();
			this.yearSub.unsubscribe();
		}
	}

	async fetchYear(e: any) {
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
	}

	doRefresh(event) {
		setTimeout(() => {
			this.router.navigate(['home', 'seller']);
			event.target.complete();
		}, 2000);
	}
}

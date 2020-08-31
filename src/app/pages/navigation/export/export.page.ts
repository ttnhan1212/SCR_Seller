import { ModelService } from './../../../services/model.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-export',
	templateUrl: './export.page.html',
	styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit, OnDestroy {
	data: any;
	name: any;
	logo: any;
	image: any;

	dataSub: Subscription;
	modelSub: Subscription;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private modelService: ModelService,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = '../../../../assets/images/banners/banner2.jpg';

		this.dataSub = this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.data = this.router.getCurrentNavigation().extras.state.export;
			}
		});
	}

	ngOnInit() {
		this.modelSub = this.modelService
			.getModelById(this.data.model)
			.subscribe((val) => {
				this.name = val.payload.data()['name'];
			});
	}

	ngOnDestroy() {
		if (this.dataSub && this.modelSub) {
			this.dataSub.unsubscribe();
			this.modelSub.unsubscribe();
		}
	}
}

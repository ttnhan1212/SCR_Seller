import { BrandService } from './../../../services/brands.service';
import { ModelService } from './../../../services/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from '../../../models/model';
import { Router } from '@angular/router';
import { Brand } from '../../../models/brand';

@Component({
	selector: 'app-request',
	templateUrl: './request.page.html',
	styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
	models: Model[];
	brands: Brand[];

	logo: any;
	image: any;
	year: number;
	name: string;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	constructor(
		private brandService: BrandService,
		private modelService: ModelService,
		public router: Router,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = '../../../../assets/images/banners/banner2.jpg';
	}

	ngOnInit() {
		this.brandService.getBrands().subscribe((data) => {
			this.brands = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Brand),
				};
			});
		});
	}

	exportAvai() {
		console.log(this.name, this.year);
	}

	doRefresh(event) {
		setTimeout(() => {
			this.router.navigate(['home', 'request']);
			event.target.complete();
		}, 2000);
	}

	onBrandChange(e: any) {
		this.modelService.getModelByBrand(e.target.value).subscribe((data) => {
			this.models = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Model),
				};
			});
		});
	}
}

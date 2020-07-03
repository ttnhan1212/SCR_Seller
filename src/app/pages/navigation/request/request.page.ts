import { ModelService } from './../../../services/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from '../../../models/model';

@Component({
	selector: 'app-request',
	templateUrl: './request.page.html',
	styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
	models: Model[];
	logo: any;
	image: any;
	year: number;
	name: string;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	constructor(private modelService: ModelService) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = 'http://placekitten.com/g/500/400';

		this.modelService.getModel().subscribe((data) => {
			this.models = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Model),
				};
			});
		});
	}

	ngOnInit() {}

	exportAvai() {
		console.log(this.name, this.year);
	}
}

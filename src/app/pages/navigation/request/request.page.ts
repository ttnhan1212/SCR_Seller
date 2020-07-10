import { ModelService } from "./../../../services/model.service";
import { Component, OnInit } from "@angular/core";
import { Model } from "../../../models/model";
import { Router } from "@angular/router";

@Component({
	selector: "app-request",
	templateUrl: "./request.page.html",
	styleUrls: ["./request.page.scss"],
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

	constructor(private modelService: ModelService, public router: Router) {
		this.logo = "../../../assets/images/logo/scroadslight.svg";
		this.image = "../../../../assets/images/banners/banner2.jpg";
	}

	ngOnInit() {
		this.modelService.getModel().subscribe((data) => {
			this.models = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Model),
				};
			});
		});
	}

	exportAvai() {
		console.log(this.name, this.year);
	}

	doRefresh(event) {
		setTimeout(() => {
			this.router.navigate(["home", "request"]);
			event.target.complete();
		}, 2000);
	}
}

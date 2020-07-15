import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-adspage",
	templateUrl: "./adspage.page.html",
	styleUrls: ["./adspage.page.scss"],
})
export class AdspagePage implements OnInit {
	logo: any;
	constructor() {
		this.logo = "../../../assets/images/logo/scroadslight.svg";
	}

	ngOnInit() {}
}

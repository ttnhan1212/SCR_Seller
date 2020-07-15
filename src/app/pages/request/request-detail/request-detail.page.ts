import { ToastService } from "../../../services/toast.service";
import { LoadingController } from "@ionic/angular";
import { AuthService } from "../../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { RequestService } from "../../../services/request.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators,
} from "@angular/forms";

@Component({
	selector: "app-request-detail",
	templateUrl: "./request-detail.page.html",
	styleUrls: ["./request-detail.page.scss"],
})
export class RequestDetailPage implements OnInit {
	id: string;
	sellerId: string;

	detailForm: FormGroup;
	name = new FormControl("", [Validators.required]);
	phone = new FormControl(null, [Validators.required]);
	location = new FormControl("", [Validators.required]);

	effDate = Math.floor(new Date().getTime() / 1000.0);
	expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);

	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
		private formBuilder: FormBuilder
	) {
		this.id = this.route.snapshot.paramMap.get("id"); //get id parameter
		console.log(this.id);
		this.sellerId = JSON.parse(localStorage.getItem("user")).uid;

		this.detailForm = this.formBuilder.group({
			name: this.name,
			phone: this.phone,
			location: this.location,
			effectedTime: this.effDate,
			expiredTime: this.expDate,
			sellerId: this.sellerId,
		});
	}

	ngOnInit() {}

	async updateRequest() {
		// const loading = await this.loadingController.create({
		// 	message: "Please wait...",
		// 	showBackdrop: true,
		// });
		// request["sellerName"] = this.name;
		// request["phone"] = this.phone;
		// request["location"] = this.location;
		// request["effectedTime"] = this.effDate;
		// request["expiredTime"] = this.expDate;
		// request["sellerId"] = this.sellerId;
		// request = {
		// 	sellerName: this.name,
		// 	phone: this.phone,
		// 	location: this.location,
		// 	effectedTime: this.effDate,
		// 	expiredTime: this.expDate,
		// 	sellerId: this.sellerId,
		// };
		console.log(this.detailForm.value);
		//this.requestService.updateRequest(this.detailForm.value, this.id);
		// try {
		// 	await loading.present();
		// 	console.log(this.detailForm.value);
		// 	await this.requestService.updateRequest(this.detailForm.value, this.id);
		// 	this.toast.showToast("Your request is successfully uploaded!");
		// 	await loading.dismiss();
		// 	this.router.navigate(["/", "home", "ongoing"]);
		// } catch (error) {
		// 	console.log(error);
		// 	this.toast.showToast(error.message);
		// 	await loading.dismiss();
		// }
	}
}

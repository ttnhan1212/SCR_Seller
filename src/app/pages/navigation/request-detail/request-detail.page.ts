import { ToastService } from "../../../services/toast.service";
import { LoadingController } from "@ionic/angular";
import { AuthService } from "../../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { RequestService } from "../../../services/request.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-request-detail",
	templateUrl: "./request-detail.page.html",
	styleUrls: ["./request-detail.page.scss"],
})
export class RequestDetailPage implements OnInit {
	id: string;
	name: string;
	phone: string;
	location: string;
	sellerId: string;

	effDate = Math.floor(new Date().getTime() / 1000.0);
	expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);

	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService
	) {
		this.id = this.route.snapshot.paramMap.get("id"); //get id parameter
		this.sellerId = JSON.parse(localStorage.getItem("user")).uid;
	}

	ngOnInit() {}

	async updateRequest() {
		let request = {};

		const loading = await this.loadingController.create({
			message: "Please wait...",
			showBackdrop: true,
		});
		request["sellerName"] = this.name;
		request["phone"] = this.phone;
		request["location"] = this.location;
		request["effectedTime"] = this.effDate;
		request["expiredTime"] = this.expDate;
		request["sellerId"] = this.sellerId;

		try {
			await loading.present();
			await this.requestService.updateRequest(request, this.id);
			this.toast.showToast("Your request is successfully uploaded!");
			await loading.dismiss();
			this.router.navigate(["/", "home", "ongoing"]);
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

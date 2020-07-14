import { Router } from "@angular/router";
import { RequestService } from "../../../services/request.service";
import { ToastService } from "../../../services/toast.service";
import { LoadingController } from "@ionic/angular";
import { AuthService } from "../../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../../../services/vehicles.service";

@Component({
	selector: "app-platenumber",
	templateUrl: "./platenumber.page.html",
	styleUrls: ["./platenumber.page.scss"],
})
export class PlatenumberPage implements OnInit {
	plate: string;
	constructor(
		public vehicleService: VehicleService,
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
		public route: Router
	) {}

	ngOnInit() {}

	async createPlate() {
		let vehicle = {};

		const loading = await this.loadingController.create({
			message: "Please wait...",
			showBackdrop: true,
		});
		vehicle["platenumber"] = this.plate;

		try {
			await loading.present();
			await this.vehicleService
				.createVehicle(vehicle)
				.then((res) => {
					this.plate = "";
					let request = {};
					request["vehiclesId"] = res.id;
					try {
						this.toast.showToast("Your request is successfully created!");
						this.requestService.createRequest(request).then((val) => {
							setTimeout(() => {
								this.route.navigate(["/", "request", val.id]);
							}, 1000);
						});
					} catch (error) {
						this.toast.showToast(error.message);
					}
				})
				.catch((error) => {
					this.toast.showToast(error.message);
				});
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

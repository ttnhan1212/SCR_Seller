import { NotiService } from './../../../services/noti.service';
import { Router, NavigationExtras } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { ToastService } from '../../../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicles.service';

@Component({
	selector: 'app-platenumber',
	templateUrl: './platenumber.page.html',
	styleUrls: ['./platenumber.page.scss'],
})
export class PlatenumberPage implements OnInit {
	plate: string;

	sellerId: string;
	requestSellerId: string;

	requestState: NavigationExtras;
	constructor(
		public vehicleService: VehicleService,
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
		public route: Router,
		public notiService: NotiService,
	) {
		this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {}

	async createPlate() {
		let vehicle = {};

		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		vehicle['platenumber'] = this.plate;

		try {
			await loading.present();
			await this.vehicleService
				.createVehicle(vehicle)
				.then((res) => {
					this.plate = '';
					let request = {};
					request['vehiclesId'] = res.id;
					request['status'] = 'draft';
					try {
						this.toast.showToast('Your request is successfully created!');
						this.requestService
							.createRequestBySeller(request, this.sellerId)
							.then((val) => {
								this.requestSellerId = val.id;
								console.log(this.requestSellerId);
							})
							.catch((err) => {
								console.log(err.message);
							});
						this.requestService
							.createRequest(request)
							.then((val) => {
								this.requestState = {
									state: {
										requestSellerId: this.requestSellerId,
									},
								};

								this.notiService.createNoti({
									requestId: val.id,
									status: 'On-going',
									updateDate: Math.floor(new Date().getTime() / 1000.0),
									user: this.sellerId,
								});
								this.route.navigate(
									['/', 'request', val.id],
									this.requestState,
								);
							})
							.catch((err) => {
								console.log(err.message);
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

import { LoaderService } from './../../../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
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
		private translate: TranslateService,
		public loader: LoaderService,
	) {
		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.sellerId = user.uid;
			}
		});
	}

	async createPlate() {
		let vehicle = {};
		vehicle['platenumber'] = this.plate;

		try {
			await this.loader.showLoader();
			await this.vehicleService
				.createVehicle(vehicle)
				.then((res) => {
					this.plate = '';
					let request = {};
					request['vehiclesId'] = res.id;
					request['status'] = 'Draft';
					try {
						this.toast.showToast('Your request is successfully created!');
						this.requestService
							.createRequestBySeller(request)
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
								this.notiService.createNoti({
									requestId: val.id,
									status: 'On-going',
									updateDate: Math.floor(new Date().getTime() / 1000.0),
									user: this.sellerId,
								});
								this.requestState = {
									state: {
										requestSellerId: this.requestSellerId,
										requestId: val.id,
									},
								};
								this.route.navigate(
									['/', 'request', 'image-guide'],
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
			await this.loader.hideLoader();
		} catch (error) {
			this.toast.showToast(error.message);
			await this.loader.hideLoader();
		}
	}
}

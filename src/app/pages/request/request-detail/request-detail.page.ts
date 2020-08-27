import { TranslateService } from '@ngx-translate/core';
import { LocationService } from './../../../services/location.service';
import { ToastService } from '../../../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { RequestService } from '../../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-request-detail',
	templateUrl: './request-detail.page.html',
	styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
	id: string;
	sellerId: string;
	request: any;

	detailForm: FormGroup;
	name = new FormControl(
		'',
		Validators.compose([(Validators.minLength(3), Validators.required)]),
	);
	phone = new FormControl(
		null,
		Validators.compose([Validators.minLength(10), Validators.required]),
	);
	location = new FormControl('', Validators.required);
	miles = new FormControl('', Validators.required);
	other = new FormControl('', Validators.required);
	seller = new FormControl('', Validators.required);

	effDate = Math.floor(new Date().getTime() / 1000.0);
	expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);

	sample: any;

	locations = [];

	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
		private formBuilder: FormBuilder,
		public locationService: LocationService,
		translate: TranslateService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		this.sample = '../../../../assets/images/png/spares/1.png';

		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.sellerId = user.uid;
			}
		});

		this.route.queryParams.subscribe((params) => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.request = this.router.getCurrentNavigation().extras.state.requestSellerId;
			}
		});

		this.detailForm = this.formBuilder.group({
			name: this.name,
			phone: this.phone,
			location: this.location,
			effectedTime: this.effDate,
			expiredTime: this.expDate,
			sellerId: this.seller,
			miles: this.miles,
			other: this.other,
			status: '진행중',
			participants: [{ created: true }],
		});

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.locationService.getLocation().subscribe((data) => {
			this.locations = data.map((val) => {
				return {
					city: val.payload.doc.data()['city'],
				};
			});
		});
	}

	async updateRequest() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		try {
			await loading.present();
			await this.requestService.updateRequestBySeller(
				this.detailForm.value,
				this.request,
			);
			await this.requestService.updateRequest(this.id, this.detailForm.value);
			await this.toast.showToast('Your request is successfully uploaded!');
			await loading.dismiss();
			await this.router.navigate(['/', 'home', 'ongoing']);
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}

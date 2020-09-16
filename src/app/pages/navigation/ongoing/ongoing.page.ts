import { LoaderService } from './../../../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/services/toast.service';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../../models/request';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit, OnDestroy {
	requests: Request[];
	requestSub: Subscription;
	temp: any[];

	logo: any;

	sellerId: string;

	now = Math.floor(new Date().getTime() / 1000.0);

	limit = 5;

	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	constructor(
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
		private translate: TranslateService,
		private loader: LoaderService,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {
		// this.updateRequestExpired();
		this.getUser();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.sellerId = user.uid;
				this.getRequestBySeller(this.sellerId);
				this.getAllRequestBySeller(this.sellerId);
			}
		});
	}

	getAllRequestBySeller(id: string) {
		this.requestService.getAllRequestBySeller(id).subscribe((data) => {
			this.temp = data.map((e) => {
				return {
					...(e.payload.doc.data() as any),
				};
			});
			console.log(this.temp);
		});
	}

	async getRequestBySeller(id: string) {
		await this.loader.showLoader();
		this.requestSub = await this.requestService
			.getRequestBySellerWithLimit(id, this.limit)
			.subscribe((data) => {
				this.requests = data.map((e) => {
					return {
						id: e.payload.doc.id,
						...(e.payload.doc.data() as Request),
					};
				});
				this.loader.hideLoader();
				console.log(this.requests);
			});
	}

	loadData(event) {
		setTimeout(() => {
			this.limit = this.limit + 5;
			this.requestService
				.getRequestBySellerWithLimit(this.sellerId, this.limit)
				.subscribe((data) => {
					this.requests = data.map((e) => {
						return {
							id: e.payload.doc.id,
							...(e.payload.doc.data() as Request),
						};
					});
					console.log(this.requests);
				});
			event.target.complete();

			// App logic to determine if all data is loaded
			// and disable the infinite scroll
			if (this.requests.length === this.temp.length) {
				this.toast.showToast('No more data load');
				event.target.disabled = true;
			}
		}, 1000);
	}

	async updateRequestExpired() {
		await this.requestService.getAllRequest().subscribe((data) => {
			const temp = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Request),
				};
			});
			temp.forEach((val) => {
				const participant: any = val.participants;
				if (
					val.expiredTime < this.now &&
					(participant.created === true || val.participants === undefined)
				) {
					this.requestService.updateRequest(val.id, {
						status: 2,
					});
				}
			});
		});
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}

	ngOnDestroy() {
		if (this.requestSub) {
			this.requestSub.unsubscribe();
		}
	}
}

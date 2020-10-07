import { ToastService } from './../../../services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotiService } from './../../../services/noti.service';
import { Request } from '../../../models/request';
import { RequestService } from 'src/app/services/request.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
	noti: any[];
	temp: any[];

	limit = 5;

	itemrequest: Request[];

	notiSub: Subscription;

	sellerId: string;

	constructor(
		public notiService: NotiService,
		public requestService: RequestService,
		private afAuth: AngularFireAuth,
		private translate: TranslateService,
		private toast: ToastService,
	) {
		// this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
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
		await this.afAuth.currentUser.then((user) => {
			if (user) {
				this.sellerId = user.uid;
				this.getNoti(this.sellerId);
				this.getAllNoti(this.sellerId);
			}
		});
	}

	getAllNoti(id: string) {
		this.notiService.getNoti(id).subscribe((val) => {
			this.temp = val.map((e) => {
				return {
					...(e.payload.doc.data() as {}),
				};
			});
			console.log(this.temp);
		});
	}

	getNoti(id: string) {
		this.notiSub = this.notiService
			.getNotiLimit(id, this.limit)
			.subscribe((data) => {
				this.noti = data.map((e) => {
					return {
						...(e.payload.doc.data() as {}),
					};
				});
				this.noti.forEach((val) => {
					this.requestService.getRequestById(val.requestId).subscribe((m) => {
						val.request = { ...(m.payload.data() as {}) };
					});
				});
			});
	}

	loadData(event) {
		setTimeout(() => {
			this.limit = this.limit + 5;
			this.notiService
				.getNotiLimit(this.sellerId, this.limit)
				.subscribe((data) => {
					this.noti = data.map((e) => {
						return {
							...(e.payload.doc.data() as {}),
						};
					});
					this.noti.forEach((val) => {
						this.requestService.getRequestById(val.requestId).subscribe((m) => {
							val.request = { ...(m.payload.data() as {}) };
						});
					});
				});
			event.target.complete();

			// App logic to determine if all data is loaded
			// and disable the infinite scroll
			if (this.noti.length === this.temp.length) {
				this.toast.showToast('No more data load');
				event.target.disabled = true;
			}
		}, 1000);
	}

	localeDate(time) {
		let myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}

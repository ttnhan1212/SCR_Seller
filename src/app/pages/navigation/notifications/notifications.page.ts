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
	itemrequest: Request[];

	notiSub: Subscription;

	sellerId: string;

	constructor(
		public notiService: NotiService,
		public requestService: RequestService,
		private afAuth: AngularFireAuth,
		private translate: TranslateService,
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
		await this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.sellerId = user.uid;
			}
			this.getNoti(this.sellerId);
		});
	}

	getNoti(id: string) {
		this.notiSub = this.notiService.getNoti(id).subscribe((data) => {
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

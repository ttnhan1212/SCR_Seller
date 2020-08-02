import { NotiService } from './../../../services/noti.service';
import { Request } from '../../../models/request';
import { RequestService } from 'src/app/services/request.service';
import { Notifications } from '../../../models/notifications';
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
	) {
		this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {
		this.notiSub = this.notiService.getNoti(this.sellerId).subscribe((data) => {
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
			console.log(this.noti);
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

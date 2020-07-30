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
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Notifications),
				};
			});
		});
	}

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}

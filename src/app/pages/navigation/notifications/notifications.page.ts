import { Request } from '../../../models/request';
import { RequestService } from 'src/app/services/request.service';
import { NotificationsService } from './../../../services/notifications.service';
import { Notifications } from '../../../models/notifications';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
	noti: Notifications[];
	request: Request[];

	notiSub: Subscription;

	constructor(
		public notiService: NotificationsService,
		public requestService: RequestService
	) {}

	ngOnInit() {
		this.notiSub = this.notiService.getNoti().subscribe((data) => {
			this.noti = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Notifications),
				};
			});
			// this.requestService
			// 	.getRequestById(this.noti[0]["requestId"])
			// 	.subscribe((val) => {
			// 		this.request = val as Request;
			// 		return this.request;
			// 	});
		});
		// setTimeout(() => {
		// 	console.log(this.noti);
		// }, 3000);
	}

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}

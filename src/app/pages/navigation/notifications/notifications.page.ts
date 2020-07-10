import { Request } from '../../../models/request';
import { RequestService } from 'src/app/services/request.service';
import { NotificationsService } from './../../../services/notifications.service';
import { Notifications } from '../../../models/notifications';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
	noti: Notifications[];
	request: any;

	constructor(
		public notiService: NotificationsService,
		public requestService: RequestService,
	) {}

	ngOnInit() {
		this.notiService.getNoti().subscribe((data) => {
			this.noti = data.map((e) => {
				return {
					id: e.payload.doc.id,
					requestId: e.payload.doc.data()['requestId'],
					status: e.payload.doc.data()['status'],
					updateDate: e.payload.doc.data()['updateDate'],
				};
			});
			console.log(this.noti[0]['requestId']);
			this.requestService
				.getRequestById(this.noti[0]['requestId'])
				.subscribe((val) => console.log(val.data()));
		});
	}
}

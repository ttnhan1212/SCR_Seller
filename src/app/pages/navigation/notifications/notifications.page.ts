import { Request } from "../../../models/request";
import { RequestService } from "src/app/services/request.service";
import { NotificationsService } from "./../../../services/notifications.service";
import { Notifications } from "../../../models/notifications";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-notifications",
	templateUrl: "./notifications.page.html",
	styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
	noti: Notifications[];
	request: Request[];

	constructor(
		public notiService: NotificationsService,
		public requestService: RequestService
	) {}

	ngOnInit() {
		this.notiService.getNoti().subscribe((data) => {
			this.noti = data.map((e) => {
				return {
					id: e.payload.doc.id,
					request: this.requestService
						.getRequestById(e.payload.doc.data()["requestId"])
						.subscribe((val) => {
							const req = val.map((e) => {
								return {
									id: e.payload.doc.id,
									...(e.payload.doc.data() as Request),
								};
							});
							console.log(req[0]);
							return req[0];
						}),
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
}

import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../../models/request';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
	requests: Request[];

	name: string;
	phone: string;
	location: string;

	effDate = Math.floor(new Date().getTime() / 1000.0);
	expDate = Math.floor(new Date().getTime() / 1000.0 + 7200);

	constructor(public requestService: RequestService) {}

	ngOnInit() {
		this.requestService.getRequest().subscribe((data) => {
			this.requests = data.map((e) => {
				const effectedTime = new Date(
					e.payload.doc.data()['effectedTime'] * 1000,
				).toLocaleString();
				const expireDate = new Date(
					e.payload.doc.data()['expireDate'] * 1000,
				).toLocaleString();
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Request),
				};
			});
		});
	}

	createRequest() {
		const Request = {};
		Request['sellerName'] = this.name;
		Request['phone'] = this.phone;
		Request['location'] = this.location;
		Request['effectedTime'] = this.effDate;
		Request['expireDate'] = this.expDate;

		this.requestService
			.createRequest(Request)
			.then((res) => {
				this.name = '';
				this.phone = '';
				this.location = '';
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

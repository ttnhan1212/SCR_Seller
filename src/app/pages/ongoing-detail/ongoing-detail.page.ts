import { Request } from '../../models/request';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ongoing-detail',
	templateUrl: './ongoing-detail.page.html',
	styleUrls: ['./ongoing-detail.page.scss'],
})
export class OngoingDetailPage implements OnInit, OnDestroy {
	id: string;
	ongoing = {};

	myValueSub: Subscription;
	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public requestService: RequestService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.myValueSub = this.requestService
			.getRequestById(this.id)
			.subscribe((data) => {
				this.ongoing = {
					name: data.payload.data()['name'],
				};
			});
	}

	async ngOnDestroy() {
		if (this.myValueSub) {
			this.myValueSub.unsubscribe();
		}
	}
}

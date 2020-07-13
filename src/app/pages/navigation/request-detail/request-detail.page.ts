import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-request-detail',
	templateUrl: './request-detail.page.html',
	styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
	id: string;
	constructor(private router: Router, public route: ActivatedRoute) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {}
}

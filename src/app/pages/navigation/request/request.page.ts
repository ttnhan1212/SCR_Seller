import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-request',
	templateUrl: './request.page.html',
	styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
	items: Observable<any[]>;
	logo: any;
	image: any;
	model: string;
	year: number;

	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	constructor(firestore: AngularFirestore) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		this.image = 'http://placekitten.com/g/500/400';

		this.items = firestore.collection('models').valueChanges();
	}

	ngOnInit() {}

	exportAvai() {
		console.log(this.model, this.year);
	}
}

import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AdsService {
	dateObj = new Date();
	now: any;

	constructor(private fireStore: AngularFirestore) {
		this.dateObj.setSeconds(0);
		this.dateObj.setMinutes(0);
		this.dateObj.setHours(12);

		this.now = Math.floor(this.dateObj.getTime() / 1000);
	}

	getAds() {
		return this.fireStore.collection('ads').snapshotChanges();
	}
}

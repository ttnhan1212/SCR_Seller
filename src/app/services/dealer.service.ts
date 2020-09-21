import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DealerService {
	constructor(private firestore: AngularFirestore) {}

	getDealer(id: string) {
		return this.firestore.collection('Dealer').doc(id).snapshotChanges();
	}

	getDealerReview(id: string) {
		return this.firestore
			.collection('Dealer')
			.doc(id)
			.collection('Review')
			.snapshotChanges();
	}

	getReviewDetail(id: string) {
		return this.firestore.collection('Review').doc(id).snapshotChanges();
	}

	createReviewInDealer(id: string, review: any) {
		this.firestore
			.collection('Dealer')
			.doc(id)
			.collection('Review')
			.add(review);
	}
}

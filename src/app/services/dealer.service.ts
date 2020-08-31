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
	getDealerWithID(id: string) {
		return this.firestore
			.collection('Dealer', (ref) => ref.where('id', '==', id))
			.valueChanges()
			.pipe(take(1));
	}

	createReviewInDealer(id: string, review: any) {
		this.firestore
			.collection('Dealer')
			.doc(id)
			.collection('Review')
			.add(review);
	}
}

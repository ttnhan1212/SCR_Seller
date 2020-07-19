import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SellerService {
	constructor(private firestore: AngularFirestore) {}

	createSeller(seller: any) {
		return this.firestore.collection('Seller').add(seller);
	}

	getSeller() {
		return this.firestore.collection('models').snapshotChanges();
	}

	updateSeller(seller: any, id: string) {
		return this.firestore.collection('Seller').doc(id).update(seller);
	}
}

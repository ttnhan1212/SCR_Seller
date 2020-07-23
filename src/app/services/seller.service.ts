import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SellerService {
	constructor(private fireStore: AngularFirestore) {}

	createSeller(id: string, seller: any) {
		return this.fireStore.collection('Seller').doc(id).set(seller);
	}

	getSeller() {
		return this.fireStore.collection('models').snapshotChanges();
	}

	updateSeller(seller: any, id: string) {
		return this.fireStore.collection('Seller').doc(id).update(seller);
	}
}

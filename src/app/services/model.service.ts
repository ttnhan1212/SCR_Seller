import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ModelService {
	constructor(private firestore: AngularFirestore) {}

	getModel() {
		return this.firestore.collection('models').snapshotChanges();
	}

	getModelByBrand(brand: string) {
		return this.firestore
			.collection('models', (ref) => ref.where('brandsId', '==', brand))
			.snapshotChanges();
	}
}

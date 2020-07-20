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

	getModelById(id: string) {
		return this.firestore.collection('models').doc(id).snapshotChanges();
	}

	getModelYear(id: string) {
		return this.firestore
			.collection('models')
			.doc(id)
			.collection('years')
			.snapshotChanges();
	}
}

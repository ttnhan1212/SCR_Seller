import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';

@Injectable({
	providedIn: 'root',
})
export class ModelService {
	constructor(private firestore: AngularFirestore) {}

	getModel() {
		return this.firestore.collection('brands').snapshotChanges();
	}
}

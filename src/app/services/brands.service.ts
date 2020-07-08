import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class BrandService {
	constructor(private firestore: AngularFirestore) {}

	getBrands() {
		return this.firestore.collection('brands').snapshotChanges();
	}
}

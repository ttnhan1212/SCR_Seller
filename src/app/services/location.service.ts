import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	constructor(private firestore: AngularFirestore) {}

	getLocation() {
		return this.firestore.collection('locations').snapshotChanges();
	}
}

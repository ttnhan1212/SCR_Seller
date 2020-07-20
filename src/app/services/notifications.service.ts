import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class NotificationsService {
	constructor(private firestore: AngularFirestore) {}

	getNoti() {
		return this.firestore.collection('notifications').snapshotChanges();
	}
}

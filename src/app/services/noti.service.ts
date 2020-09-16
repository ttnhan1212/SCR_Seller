import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class NotiService {
	constructor(private firestore: AngularFirestore) {}

	getNoti(id: string) {
		return this.firestore
			.collection('notifications', (ref) => ref.where('user', '==', id))
			.snapshotChanges();
	}

	getNotiLimit(id: string, limit: number) {
		return this.firestore
			.collection('notifications', (ref) =>
				ref.where('user', '==', id).orderBy('updateDate', 'desc').limit(limit),
			)
			.snapshotChanges();
	}

	createNoti(noti: any) {
		return this.firestore.collection('notifications').add(noti);
	}

	updateNoti(noti: any, id: string) {
		return this.firestore.collection('notifications').doc(id).update(noti);
	}
}

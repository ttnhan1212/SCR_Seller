import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RequestService {
	loggedUser: any;

	constructor(
		private firestore: AngularFirestore,
		private afAuth: AngularFireAuth
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.loggedUser = user;
			}
		});
	}

	getAllRequest() {
		return this.firestore.collection('requests').snapshotChanges();
	}

	getRequestBySeller(sellerId: string) {
		return this.firestore
			.collection('requests', (ref) => ref.where('sellerId', '==', sellerId))
			.snapshotChanges();
	}

	getRequestById(id: string) {
		return this.firestore.collection('requests').doc(id).snapshotChanges();
	}

	createRequest(request: any) {
		return this.firestore.collection('requests').add(request);
	}

	createRequestBySeller(request: any) {
		return this.firestore
			.collection('Seller')
			.doc(this.loggedUser.uid)
			.collection('Requests')
			.add(request);
	}

	updateRequest(id: string, request: any) {
		this.firestore.collection('requests').doc(id).update(request);
	}
	updateRequestBySeller(request: any, requestId: string) {
		this.firestore
			.collection('Seller')
			.doc(this.loggedUser.uid)
			.collection('Requests')
			.doc(requestId)
			.update(request);
	}

	deleteRequest(id: string) {
		this.firestore.collection('requests').doc(id).delete();
	}

	getParticipant(id: string) {
		return this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.snapshotChanges();
	}

	getParticipantById(id: string, partId: string) {
		return this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.doc(partId)
			.snapshotChanges();
	}

	updateParticipant(id: string, partId: string, status: any) {
		this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.doc(partId)
			.update(status);
	}

	deleteParticipant(id: string, partId: string) {
		this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.doc(partId)
			.delete();
	}

	selectedRequest(id: string) {
		return this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) => ref.where('selected', '==', true))
			.valueChanges();
	}
}

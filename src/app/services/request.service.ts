import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RequestService {
	loggedUser: any;

	constructor(private firestore: AngularFirestore) {
		if (this.isLoggedIn === true) {
			this.loggedUser = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	getRequest() {
		return this.firestore
			.collection('requests', (ref) =>
				ref.where('sellerId', '==', this.loggedUser),
			)
			.snapshotChanges();
	}
	getRequestById(id: string) {
		return this.firestore.collection('requests').doc(id).snapshotChanges();
	}

	createRequest(request: any) {
		return this.firestore.collection('requests').add(request);
	}

	createRequestBySeller(request: any, id: string) {
		return this.firestore
			.collection('Seller')
			.doc(id)
			.collection('Requests')
			.add(request);
	}

	updateRequest(request: any, id: string) {
		this.firestore.collection('requests').doc(id).update(request);
	}
	updateRequestBySeller(request: any, sellerId: string, requestId: string) {
		this.firestore
			.collection('Seller')
			.doc(sellerId)
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

	deleteParticipant(id: string, partId: string) {
		this.firestore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.doc(partId)
			.delete();
	}
}

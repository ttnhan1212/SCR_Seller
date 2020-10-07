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
		private afAuth: AngularFireAuth,
	) {
		this.afAuth.currentUser.then((user) => {
			if (user) {
				this.loggedUser = user.uid;
			}
		});
	}

	getAllRequest() {
		return this.firestore.collection('requests').snapshotChanges();
	}

	getAllRequestBySeller(sellerId: string) {
		return this.firestore
			.collection('requests', (ref) =>
				ref.where('sellerId', '==', sellerId).where('expired', '==', false),
			)
			.snapshotChanges();
	}

	getRequestBySellerWithLimit(sellerId: string, limit: number) {
		return this.firestore
			.collection('requests', (ref) =>
				ref
					.where('sellerId', '==', sellerId)
					.where('expired', '==', false)
					.orderBy('expiredTime', 'desc')
					.limit(limit),
			)
			.snapshotChanges();
	}

	getRequestById(id: string) {
		return this.firestore.collection('requests').doc(id).snapshotChanges();
	}

	createRequest(request: any) {
		return this.firestore.collection('requests').add(request);
	}

	createRequestBySeller(id: string, request: any) {
		return this.firestore
			.collection('Seller')
			.doc(this.loggedUser)
			.collection('Requests')
			.doc(id)
			.set(request);
	}

	updateRequest(id: string, request: any) {
		this.firestore.collection('requests').doc(id).update(request);
	}

	updateRequestBySeller(request: any, requestId: string) {
		this.firestore
			.collection('Seller')
			.doc(this.loggedUser)
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
			.collection('participants', (ref) => ref.orderBy('bidTime', 'desc'))
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

	createReview(review: any) {
		this.firestore.collection('Review').add(review);
	}

	getAllReview() {
		return this.firestore.collection('Review').snapshotChanges();
	}
}

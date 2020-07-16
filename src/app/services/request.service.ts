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

	getRequest() {
		return this.firestore
			.collection('requests', (ref) =>
				ref.where('sellerId', '==', this.loggedUser)
			)
			.snapshotChanges();
	}
	getRequestById(id: string) {
		return this.firestore.collection('requests').doc(id).snapshotChanges();
	}

	createRequest(request: any) {
		return this.firestore.collection('requests').add(request);
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	updateRequest(request: any, id: string) {
		this.firestore.collection('requests').doc(id).update(request);
	}

	deleteRequest(id: string) {
		this.firestore.collection('requests').doc(id).delete();
	}
}

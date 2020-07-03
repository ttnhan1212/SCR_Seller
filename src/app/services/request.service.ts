import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';

@Injectable({
	providedIn: 'root',
})
export class RequestService {
	constructor(private firestore: AngularFirestore) {}

	getRequest = () => {
		return this.firestore.collection('requests').snapshotChanges();
	};

	createRequest = (request: Request) => {
		return this.firestore.collection('requests').add(request);
	};

	updateRequest = (request: Request) => {
		delete request.id;
		this.firestore.doc('requests/' + request.id).update(request);
	};

	deleteRequest = (requestId: string) => {
		this.firestore.doc('requests/' + requestId).delete();
	};
}

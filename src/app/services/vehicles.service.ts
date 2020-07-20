import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class VehicleService {
	constructor(private firestore: AngularFirestore) {}

	// getRequest() {
	// 	return this.firestore
	// 		.collection("requests", (ref) =>
	// 			ref.where("sellerId", "==", this.loggedUser)
	// 		)
	// 		.snapshotChanges();
	// }

	getVehicleById(id: string) {
		return this.firestore
			.collection('vehicles', (ref) => ref.where('id', '==', id))
			.snapshotChanges();
	}

	createVehicle(vehicle: any) {
		return this.firestore.collection('vehicles').add(vehicle);
	}

	// updateRequest(request: Request) {
	// 	delete request.id;
	// 	this.firestore.doc('requests/' + request.id).update(request);
	// }

	deleteVehicle(id: string) {
		this.firestore.collection('vehicles').doc(id).delete();
	}
}

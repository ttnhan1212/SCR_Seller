import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
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

	getRequestById(id: string) {
		return this.firestore
			.collection("requests", (ref) => ref.where("id", "==", id))
			.snapshotChanges();
	}

	createVehicle(vehicle: any) {
		return this.firestore.collection("vehicles").add(vehicle);
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem("user"));
		return user !== null;
	}

	// updateRequest(request: Request) {
	// 	delete request.id;
	// 	this.firestore.doc('requests/' + request.id).update(request);
	// }

	// deleteRequest(requestId: string) {
	// 	this.firestore.doc("requests/" + requestId).delete();
	// }
}

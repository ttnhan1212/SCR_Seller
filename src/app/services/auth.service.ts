import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(public afAuth: AngularFireAuth, public router: Router) {}

	async loginAny() {
		await this.afAuth.signInAnonymously();
		this.router.navigate(['home/seller']);
	}
}

import { SellerService } from './seller.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user: User;

	constructor(public afAuth: AngularFireAuth, public router: Router) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.user = user;
				localStorage.setItem('user', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user', null);
			}
		});
	}

	async loginAny() {
		await this.afAuth.signInAnonymously();
		this.router.navigate(['home/seller']);
	}

	async logout() {
		await this.afAuth.signOut();
		this.router.navigate(['login']);
	}
}
import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../../models/request';
import { Subscription, Observable } from 'rxjs';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit, OnDestroy {
	requests: Request[];
	requestSub: Subscription;

	logo: any;

	sellerId: string;

	now = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		public requestService: RequestService,
		public afAuth: AngularFireAuth,
		public authService: AuthService,
		public loadingController: LoadingController,
		public toast: ToastService,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
	}

	ngOnInit() {
		this.updateRequestExpired();
		this.getUser();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.sellerId = user.uid;
				this.getRequestBySeller(this.sellerId);
			}
		});
	}

	getRequestBySeller(id: string) {
		this.requestSub = this.requestService
			.getRequestBySeller(id)
			.subscribe((data) => {
				this.requests = data.map((e) => {
					return {
						id: e.payload.doc.id,
						...(e.payload.doc.data() as Request),
					};
				});
			});
	}

	async updateRequestExpired() {
		await this.requestService.getAllRequest().subscribe((data) => {
			const temp = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Request),
				};
			});
			temp.forEach((val) => {
				const participant: any = val.participants;
				if (
					val.expiredTime <= this.now &&
					(participant.created === true || val.participants === undefined)
				) {
					this.requestService.updateRequest(val.id, {
						status: 'Expired',
					});
				}
			});
		});
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}

	ngOnDestroy() {
		if (this.requestSub) {
			this.requestSub.unsubscribe();
		}
	}
}

import { LoaderService } from './../../../services/loader.service';
import { SellerService } from './../../../services/seller.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../../services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PrivacypolicyPage } from '../../../components/modals/privacypolicy/privacypolicy.page';
import { PuagreementPage } from '../../../components/modals/puagreement/puagreement.page';
import { TermconditionPage } from '../../../components/modals/termcondition/termcondition.page';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.page.html',
	styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
	checkBoxList: any;
	isIndeterminate: boolean;
	masterCheck: boolean;

	createDate = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		private modalController: ModalController,
		public loader: LoaderService,
		public toast: ToastService,
		public authService: AuthService,
		public afAuth: AngularFireAuth,
		public sellerService: SellerService,
		private translate: TranslateService,
	) {
		this.checkBoxList = [
			{
				id: 1,
				value: '개인정보 수집',
				isChecked: false,
			},
			{
				id: 2,
				value: '이용약관',
				isChecked: false,
			},
			{
				id: 3,
				value: '개인정보 이용동의',
				isChecked: false,
			},
		];

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}

	ngOnInit() {}

	async privatePolicyModal() {
		const modal = await this.modalController.create({
			component: PrivacypolicyPage,
		});
		return await modal.present();
	}

	async termConditionModal() {
		const modal = await this.modalController.create({
			component: TermconditionPage,
		});
		return await modal.present();
	}

	async PuaModal() {
		const modal = await this.modalController.create({
			component: PuagreementPage,
		});
		return await modal.present();
	}

	checkMaster() {
		setTimeout(() => {
			this.checkBoxList.forEach((obj) => {
				obj.isChecked = this.masterCheck;
			});
		});
	}

	checkEvent() {
		const totalItems = this.checkBoxList.length;
		let checked = 0;
		this.checkBoxList.map((obj) => {
			if (obj.isChecked) checked++;
			// console.log(obj.isChecked);
		});
		if (checked > 0 && checked < totalItems) {
			//If even one item is checked but not all
			this.isIndeterminate = true;
			this.masterCheck = false;
		} else if (checked == totalItems) {
			//If all are checked
			this.masterCheck = true;
			this.isIndeterminate = false;
		} else {
			//If none is checked
			this.isIndeterminate = false;
			this.masterCheck = false;
		}
	}

	modalNavigate(id) {
		let checkboxId = id;
		//let messageId = el.dataset.messageId;

		if (checkboxId === 1) {
			this.privatePolicyModal();
		} else {
			if (checkboxId === 2) {
				this.termConditionModal();
			} else if (checkboxId === 3) {
				this.PuaModal();
			}
		}
	}

	async anonyLogin() {
		try {
			await this.loader.showLoader();
			await this.authService.loginAny();
			await this.afAuth.onAuthStateChanged((user) => {
				if (user) {
					this.sellerService.createSeller(user.uid, {
						uid: user.uid,
						create_date: this.createDate,
					});
				}
			});
			await this.loader.hideLoader();
		} catch (error) {
			this.toast.showToast(error.message);
			await this.loader.hideLoader();
		}
	}
}

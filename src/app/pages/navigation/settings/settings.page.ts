import { ToastService } from '../../../services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	panelOpenState = false;
	constructor(private toastService: ToastService) {}

	ngOnInit() {}

	showToast(message: string) {
		this.toastService.showToast(message);
	}
}

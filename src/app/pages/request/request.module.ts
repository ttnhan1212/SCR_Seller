import { RequestRouter } from './request.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPage } from './request.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RequestRouter],
	declarations: [RequestPage],
})
export class RequestPageModule {}

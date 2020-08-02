import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuagreementPageRoutingModule } from './puagreement-routing.module';

import { PuagreementPage } from './puagreement.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PuagreementPageRoutingModule,
	],
	declarations: [PuagreementPage],
})
export class PuagreementPageModule {}

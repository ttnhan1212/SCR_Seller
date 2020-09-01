import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitPageRoutingModule } from './visit-routing.module';

import { VisitPage } from './visit.page';

import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		VisitPageRoutingModule,
		BarRatingModule,
	],
	declarations: [VisitPage],
})
export class VisitPageModule {}

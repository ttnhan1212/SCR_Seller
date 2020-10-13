import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitPageRoutingModule } from './visit-routing.module';

import { VisitPage } from './visit.page';

import { BarRatingModule } from 'ngx-bar-rating';
import { TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../index/splash/splash.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		VisitPageRoutingModule,
		BarRatingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateModule,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	declarations: [VisitPage],
})
export class VisitPageModule {}

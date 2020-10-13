import { BarRatingModule } from 'ngx-bar-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerDetailPageRoutingModule } from './dealer-detail-routing.module';

import { DealerDetailPage } from './dealer-detail.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/pages/index/splash/splash.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DealerDetailPageRoutingModule,
		BarRatingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	declarations: [DealerDetailPage],
})
export class DealerDetailPageModule {}

import { BarRatingModule } from 'ngx-bar-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ReviewPageRoutingModule,
		BarRatingModule,
		MatFormFieldModule,
		MatInputModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	declarations: [ReviewPage],
})
export class ReviewPageModule {}

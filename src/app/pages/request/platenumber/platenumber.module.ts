import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatenumberPageRoutingModule } from './platenumber-routing.module';

import { PlatenumberPage } from './platenumber.page';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PlatenumberPageRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		HttpClientModule,
	],
	declarations: [PlatenumberPage],
})
export class PlatenumberPageModule {}

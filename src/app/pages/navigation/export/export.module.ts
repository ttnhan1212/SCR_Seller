import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportPageRoutingModule } from './export-routing.module';

import { ExportPage } from './export.page';
import { TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../index/splash/splash.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExportPageRoutingModule,
    TranslateModule.forRoot({
			loader: {
				provide: TranslateModule,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
  ],
  declarations: [ExportPage]
})
export class ExportPageModule {}

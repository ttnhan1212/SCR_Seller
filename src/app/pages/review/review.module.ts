import { BarRatingModule } from 'ngx-bar-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ReviewPageRoutingModule,
		BarRatingModule,
		MatFormFieldModule,
		MatInputModule,
	],
	declarations: [ReviewPage],
})
export class ReviewPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationPage } from './navigation.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		NavigationPageRoutingModule,
		ReactiveFormsModule,
	],
	declarations: [NavigationPage],
})
export class NavigationPageModule {}

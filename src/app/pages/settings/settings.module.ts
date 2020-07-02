import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SettingsPageRoutingModule,
		MatExpansionModule,
	],
	declarations: [SettingsPage],
})
export class SettingsPageModule {}

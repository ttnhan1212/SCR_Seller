import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatenumberPageRoutingModule } from './platenumber-routing.module';

import { PlatenumberPage } from './platenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatenumberPageRoutingModule
  ],
  declarations: [PlatenumberPage]
})
export class PlatenumberPageModule {}

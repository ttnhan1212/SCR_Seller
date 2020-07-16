import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingDetailPageRoutingModule } from './ongoing-detail-routing.module';

import { OngoingDetailPage } from './ongoing-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingDetailPageRoutingModule
  ],
  declarations: [OngoingDetailPage]
})
export class OngoingDetailPageModule {}

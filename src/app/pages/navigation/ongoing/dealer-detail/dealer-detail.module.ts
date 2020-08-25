import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerDetailPageRoutingModule } from './dealer-detail-routing.module';

import { DealerDetailPage } from './dealer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerDetailPageRoutingModule
  ],
  declarations: [DealerDetailPage]
})
export class DealerDetailPageModule {}

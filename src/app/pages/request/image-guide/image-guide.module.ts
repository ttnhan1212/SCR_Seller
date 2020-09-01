import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGuidePageRoutingModule } from './image-guide-routing.module';

import { ImageGuidePage } from './image-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGuidePageRoutingModule
  ],
  declarations: [ImageGuidePage]
})
export class ImageGuidePageModule {}

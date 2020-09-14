import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGuidePage } from './image-guide.page';

const routes: Routes = [
  {
    path: '',
    component: ImageGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageGuidePageRoutingModule {}

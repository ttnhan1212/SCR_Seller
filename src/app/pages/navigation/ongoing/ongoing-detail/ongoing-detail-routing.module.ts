import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingDetailPage } from './ongoing-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingDetailPageRoutingModule {}

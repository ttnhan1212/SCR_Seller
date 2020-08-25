import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerDetailPage } from './dealer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DealerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerDetailPageRoutingModule {}

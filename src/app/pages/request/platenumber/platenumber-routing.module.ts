import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatenumberPage } from './platenumber.page';

const routes: Routes = [
  {
    path: '',
    component: PlatenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatenumberPageRoutingModule {}

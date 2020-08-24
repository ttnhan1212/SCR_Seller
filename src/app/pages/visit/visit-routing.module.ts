import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitPage } from './visit.page';

const routes: Routes = [
  {
    path: '',
    component: VisitPage
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitPageRoutingModule {}

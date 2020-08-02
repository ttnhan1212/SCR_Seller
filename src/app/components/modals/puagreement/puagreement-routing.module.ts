import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuagreementPage } from './puagreement.page';

const routes: Routes = [
  {
    path: '',
    component: PuagreementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuagreementPageRoutingModule {}

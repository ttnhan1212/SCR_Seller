import { IndexRoutingModule } from './index-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, IndexRoutingModule],
	declarations: [IndexPage],
})
export class IndexPageModule {}

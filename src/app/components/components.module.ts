import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [StartComponent, SlidesComponent],
	exports: [StartComponent, SlidesComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}

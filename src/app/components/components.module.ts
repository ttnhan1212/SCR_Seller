import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [SlidesComponent],
	exports: [SlidesComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}

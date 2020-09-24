import { DateAgoPipe } from './date-ago.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [DateAgoPipe],
	imports: [CommonModule],
	exports: [DateAgoPipe],
})
export class MainPipe {}

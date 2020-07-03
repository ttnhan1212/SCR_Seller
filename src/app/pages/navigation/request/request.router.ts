import { RequestPage } from './request.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RequestPage,
		children: [
			{
				path: 'platenumber',
				loadChildren: () =>
					import('../platenumber/platenumber.module').then(
						(m) => m.PlatenumberPageModule,
					),
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RequestRouter {}

import { ErrorsPage } from './../errors/errors.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
	{
		path: '',
		component: NavigationPage,
		children: [
			{
				path: 'request',
				loadChildren: () =>
					import('./request/request.module').then((m) => m.RequestPageModule),
			},
			{
				path: 'ongoing',
				loadChildren: () =>
					import('./ongoing/ongoing.module').then((m) => m.OngoingPageModule),
			},
			{
				path: 'menu',
				loadChildren: () =>
					import('./settings/settings.module').then(
						(m) => m.SettingsPageModule,
					),
			},
			{ path: '**', component: ErrorsPage },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NavigationPageRoutingModule {}

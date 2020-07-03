// import { ErrorsPage } from './../errors/errors.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

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
				path: 'request/plate',
				loadChildren: () =>
					import('./platenumber/platenumber.module').then(
						(m) => m.PlatenumberPageModule,
					),
			},
			{
				path: 'ongoing',
				loadChildren: () =>
					import('./ongoing/ongoing.module').then((m) => m.OngoingPageModule),
			},
			{
				path: 'setting',
				loadChildren: () =>
					import('./settings/settings.module').then(
						(m) => m.SettingsPageModule,
					),
			},
			{
				path: '',
				redirectTo: 'request',
				pathMatch: 'full',
			},
		],
		...canActivate(redirectUnauthorizedToLogin),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NavigationPageRoutingModule {}

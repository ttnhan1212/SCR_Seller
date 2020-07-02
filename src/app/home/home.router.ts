import { ErrorsPage } from './../pages/errors/errors.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
	redirectUnauthorizedTo(['index/login']);

const routes: Routes = [
	{
		path: '',
		component: HomePage,
		children: [
			{
				path: 'request',
				loadChildren: () =>
					import('../pages/request/request.module').then(
						(m) => m.RequestPageModule,
					),
			},
			{
				path: 'ongoing',
				loadChildren: () =>
					import('../pages/ongoing/ongoing.module').then(
						(m) => m.OngoingPageModule,
					),
			},
			{
				path: 'menu',
				loadChildren: () =>
					import('../pages/settings/settings.module').then(
						(m) => m.SettingsPageModule,
					),
			},
			{ path: '**', component: ErrorsPage },
		],
		...canActivate(redirectUnauthorizedToLogin),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRouter {}

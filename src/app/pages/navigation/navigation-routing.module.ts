// import { ErrorsPage } from './../errors/errors.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ExportPageModule } from './export/export.module';
import { ExportPage } from './export/export.page';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
	{
		path: '',
		component: NavigationPage,
		children: [
			{
				path: 'seller',
				loadChildren: () =>
					import('./home/home.module').then((m) => m.HomePageModule),
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
				path: 'infor',
				loadChildren: () =>
					import('./infor/infor.module').then((m) => m.InforPageModule),
			},
			{
				path: 'notifications',
				loadChildren: () =>
					import('./notifications/notifications.module').then(
						(m) => m.NotificationsPageModule,
					),
			},
			{
				path: 'export',
				component: ExportPage,
				loadChildren: () =>
					import('./export/export.module').then((m) => m.ExportPageModule),
			},
			{
				path: '',
				redirectTo: 'home',
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

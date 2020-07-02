import { ErrorsPage } from './../pages/errors/errors.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToRequest = () => redirectLoggedInTo(['home/request']);

const routes: Routes = [
	{
		path: '',
		component: IndexPage,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../pages/welcome/welcome.module').then(
						(m) => m.WelcomePageModule,
					),
			},
			{
				path: 'login',
				loadChildren: () =>
					import('../pages/login/login.module').then((m) => m.LoginPageModule),
				...canActivate(redirectLoggedInToRequest),
			},
			{ path: '**', component: ErrorsPage },
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexRouter {}

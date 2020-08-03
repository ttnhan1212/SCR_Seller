import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToRequest = () => redirectLoggedInTo(['home/seller']);

const routes: Routes = [
	{
		path: '',
		component: IndexPage,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./splash/splash.module').then((m) => m.SplashPageModule),
			},
			{
				path: 'welcome',
				loadChildren: () =>
					import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
			},
			{
				path: 'privatepolicy',
				loadChildren: () =>
					import(
						'../../components/modals/privacypolicy/privacypolicy.module'
					).then((m) => m.PrivacypolicyPageModule),
			},
			{
				path: 'termcondition',
				loadChildren: () =>
					import(
						'../../components/modals/termcondition/termcondition.module'
					).then((m) => m.TermconditionPageModule),
			},
			{
				path: 'puagreement',
				loadChildren: () =>
					import('../../components/modals/puagreement/puagreement.module').then(
						(m) => m.PuagreementPageModule,
					),
			},
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full',
			},
		],
		...canActivate(redirectLoggedInToRequest),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexRoutingModule {}

import { ErrorsPage } from './pages/errors/errors.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/index/splash/splash.module').then(
				(m) => m.SplashPageModule,
			),
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/index/index.module').then((m) => m.IndexPageModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/navigation/navigation.module').then(
				(m) => m.NavigationPageModule,
			),
	},
	{
		path: 'request',
		loadChildren: () =>
			import('./pages/request/request.module').then((m) => m.RequestPageModule),
	},
	{
		path: 'ads',
		loadChildren: () =>
			import('./pages/adspage/adspage.module').then((m) => m.AdspagePageModule),
	},
	{
		path: 'home/ongoing/:id',
		loadChildren: () =>
			import(
				'./pages/navigation/ongoing/ongoing-detail/ongoing-detail.module'
			).then((m) => m.OngoingDetailPageModule),
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{ path: '**', component: ErrorsPage },
	{
		path: 'privacypolicy',
		loadChildren: () =>
			import('./components/modals/privacypolicy/privacypolicy.module').then(
				(m) => m.PrivacypolicyPageModule,
			),
	},
	{
		path: 'puagreement',
		loadChildren: () =>
			import('./components/modals/puagreement/puagreement.module').then(
				(m) => m.PuagreementPageModule,
			),
	},
	{
		path: 'termcondition',
		loadChildren: () =>
			import('./components/modals/termcondition/termcondition.module').then(
				(m) => m.TermconditionPageModule,
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

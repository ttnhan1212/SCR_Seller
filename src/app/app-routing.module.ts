import { ErrorsPage } from './pages/errors/errors.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{ path: '**', component: ErrorsPage },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

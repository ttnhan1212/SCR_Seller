import { ErrorsPage } from './pages/errors/errors.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'index',
		loadChildren: () =>
			import('./index/index.module').then((m) => m.IndexPageModule),
	},
	{
		path: '',
		redirectTo: 'index',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
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

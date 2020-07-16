import { RequestDetailPage } from "./request-detail/request-detail.page";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RequestPage } from "./request.page";

const routes: Routes = [
	{
		path: "",
		component: RequestPage,
		children: [
			{
				path: "plate",
				loadChildren: () =>
					import("./platenumber/platenumber.module").then(
						(m) => m.PlatenumberPageModule
					),
			},
			{
				path: ":id",
				component: RequestDetailPage,
				loadChildren: () =>
					import("./request-detail/request-detail.module").then(
						(m) => m.RequestDetailPageModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RequestPageRoutingModule {}

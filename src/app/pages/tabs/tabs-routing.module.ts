import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "chart",
        loadChildren: () =>
          import("../chart/chart.module").then((m) => m.ChartPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

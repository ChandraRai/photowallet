import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/layout",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
    data: { title: "Home" },
  },
  {
    path: "collections",
    loadChildren: () =>
      import("./pages/folder/folder.module").then((m) => m.FolderPageModule),
    data: { title: "Collections" },
  },
  {
    path: "camera",
    loadChildren: () =>
      import("./pages/camera/camera.module").then((m) => m.CameraPageModule),
    data: { title: "Camera" },
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/favorite/favorite.module").then(
        (m) => m.FavoritePageModule
      ),
    data: { title: "Profile" },
  },
  {
    path: "developer",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutPageModule),
    data: { title: "Developer" },
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutPageModule),
    data: { title: "App" },
  },
  {
    path: "privacy",
    loadChildren: () =>
      import("./pages/policy/policy.module").then((m) => m.PolicyPageModule),
    data: { title: "Privacy Policy" },
  },
  {
    path: "terms",
    loadChildren: () =>
      import("./pages/policy/policy.module").then((m) => m.PolicyPageModule),
    data: { title: "Terms of Use" },
  },
  {
    path: "cookies",
    loadChildren: () =>
      import("./pages/policy/policy.module").then((m) => m.PolicyPageModule),
    data: { title: "Cookies Policy" },
  },
  {
    path: "layout",
    loadChildren: () =>
      import("./pages/layout/layout.module").then((m) => m.LayoutPageModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/chart/chart.module').then( m => m.ChartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

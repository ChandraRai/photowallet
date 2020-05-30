import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    data: { title: "Photo Wallet" }
  },
  {
    path: 'collections',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule),
    data: { title: "Collections" }
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule),
    data: { title: "Camera" }
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule),
    data: { title: "Favorites" }
  },
  {
    path: 'developer',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    data: {title: "Developer"}
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    data: {title: "App"}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

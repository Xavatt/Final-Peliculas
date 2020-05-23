import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./Paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'peliculasyseries',
    loadChildren: () => import('./Paginas/peliculasyseries/peliculasyseries.module').then( m => m.PeliculasyseriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

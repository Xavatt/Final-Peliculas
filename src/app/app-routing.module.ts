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
  {
    path: 'peliculas',
    loadChildren: () => import('./Paginas/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'pelis',
    loadChildren: () => import('./Paginas/pelis/pelis.module').then( m => m.PelisPageModule)
  },
  {
    path: 'peli/:id',
    loadChildren: () => import('./Paginas/peli-details/peli-details.module').then( m => m.PeliDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

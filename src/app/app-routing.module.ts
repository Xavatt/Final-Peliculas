import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./Paginas/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
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
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fav',
    loadChildren: () => import('./Paginas/fav/fav.module').then( m => m.FavPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

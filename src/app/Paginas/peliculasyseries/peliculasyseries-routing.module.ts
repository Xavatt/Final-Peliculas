import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasyseriesPage } from './peliculasyseries.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasyseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasyseriesPageRoutingModule {}

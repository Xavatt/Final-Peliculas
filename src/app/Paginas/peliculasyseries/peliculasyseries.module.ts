import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasyseriesPageRoutingModule } from './peliculasyseries-routing.module';

import { PeliculasyseriesPage } from './peliculasyseries.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasyseriesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PeliculasyseriesPage]
})
export class PeliculasyseriesPageModule {}

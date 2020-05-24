import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  declarations: [PeliculasPage]
})
export class PeliculasPageModule {}

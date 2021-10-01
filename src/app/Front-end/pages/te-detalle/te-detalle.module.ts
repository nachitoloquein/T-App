import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeDetallePageRoutingModule } from './te-detalle-routing.module';

import { TeDetallePage } from './te-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeDetallePageRoutingModule
  ],
  declarations: [TeDetallePage]
})
export class TeDetallePageModule {}

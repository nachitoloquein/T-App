import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeDetallePage } from './te-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TeDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeDetallePageRoutingModule {}

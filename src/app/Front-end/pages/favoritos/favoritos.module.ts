import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { FavoritosPage } from './favoritos.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModuloComponentsModule } from '../../components/modulo-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    Ng2SearchPipeModule,
    ModuloComponentsModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}

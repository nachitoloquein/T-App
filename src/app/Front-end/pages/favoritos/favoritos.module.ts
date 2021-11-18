import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { StarsComponent } from '../stars/stars.component';
import { FavoritosPage } from './favoritos.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FavoritosPage, StarsComponent]
})
export class FavoritosPageModule {}

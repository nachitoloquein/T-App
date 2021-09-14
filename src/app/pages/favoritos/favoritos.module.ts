import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FavoritosPage } from './favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    FavoritosPageRoutingModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}

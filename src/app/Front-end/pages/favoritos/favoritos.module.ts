import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { StarsComponent } from '../../components/stars/stars.component';
import { FavoritosPage } from './favoritos.page';
import { TeaCardComponent } from '../../components/tea-card/tea-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeartShareComponent } from '../../components/heart-share/heart-share.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FavoritosPage, StarsComponent, TeaCardComponent, HeartShareComponent]
})
export class FavoritosPageModule {}

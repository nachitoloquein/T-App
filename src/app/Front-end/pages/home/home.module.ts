import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { StarsComponent } from '../../components/stars/stars.component';
import { TeaCardComponent } from '../../components/tea-card/tea-card.component';
import { HomePageRoutingModule } from './home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomePage, StarsComponent, TeaCardComponent]
})
export class HomePageModule {}

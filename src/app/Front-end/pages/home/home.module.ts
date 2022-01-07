import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TeaCardComponent } from '../../components/tea-card/tea-card.component';
import { HomePageRoutingModule } from './home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OptionsComponent } from '../../components/options/options.component'
import { HeartShareComponent } from '../../components/heart-share/heart-share.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomePage, TeaCardComponent, OptionsComponent, HeartShareComponent],
  entryComponents:[OptionsComponent]
})
export class HomePageModule {}

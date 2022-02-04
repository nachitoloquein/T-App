import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OptionsComponent } from '../../components/options/options.component'
import { ModuloComponentsModule } from '../../components/modulo-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule,
    ModuloComponentsModule
  ],
  declarations: [HomePage, OptionsComponent],
  entryComponents:[OptionsComponent]
})
export class HomePageModule {}

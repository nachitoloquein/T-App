import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { TeaDetailComponent } from '../../components/tea-detail/tea-detail.component';
import { StarsComponent } from '../../components/stars/stars.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, TeaDetailComponent, StarsComponent],
  entryComponents: [TeaDetailComponent]
})
export class TabsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaDetailComponent } from '../components/tea-detail/tea-detail.component';
import { StarsComponent } from '../components/stars/stars.component';
import { HeartShareComponent } from '../components/heart-share/heart-share.component';
import { TeaCardComponent } from '../components/tea-card/tea-card.component';


@NgModule({
  declarations: [ TeaCardComponent, HeartShareComponent, StarsComponent, TeaDetailComponent],
  imports: [
    CommonModule
  ],
  entryComponents:[ TeaDetailComponent ],
  exports: [ TeaCardComponent, HeartShareComponent, StarsComponent,]
})
export class ModuloComponentsModule { }

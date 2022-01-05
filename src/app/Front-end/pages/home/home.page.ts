import { Component } from '@angular/core';
import { TeService } from '../../../services/te.service';
import { PopoverController } from '@ionic/angular';
import { OptionsComponent } from '../../components/options/options.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTerm: string;
  teas: any=[];

  constructor(private teService: TeService, public popoverController: PopoverController) {
    this.teService.getTeas().subscribe(tea=>{
    this.teas = tea;
    })
   }

   async abrirPopover(ev: any){
    const popover = await this.popoverController.create({
      component: OptionsComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
   }

   
}

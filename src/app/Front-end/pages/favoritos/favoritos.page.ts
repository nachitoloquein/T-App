import { Component, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverFiltroPage } from 'src/app/Front-end/popover/popover-filtro/popover-filtro.page';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    
  }

  async abrirPopover(event){
    const popover = await this.popoverController.create({
      component: PopoverFiltroPage,
      event
    });
   return await popover.present();
  }
}

import { Component, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverFiltroPage } from 'src/app/Front-end/popover/popover-filtro/popover-filtro.page';
import { TeService, tea } from '../../../services/te.service';
import { ModalController } from "@ionic/angular";
import { TeaDetailComponent } from '../tea-detail/tea-detail.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  public teas: any=[];

  constructor(public popoverController: PopoverController,
     public teService: TeService, private modal : ModalController) { }

  ngOnInit() {
    this.teService.getTea().subscribe( teas =>{
    this.teas = teas;
    })
  }

  async abrirPopover(event){
    const popover = await this.popoverController.create({
      component: PopoverFiltroPage,
      event
    });
   return await popover.present();
  }

  openTea(tea){
    this.modal.create({
      component: TeaDetailComponent,
      componentProps : {
        name: tea.name
      }
    }).then((modal)=> modal.present())
  }
}

import { Component, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverFiltroPage } from 'src/app/Front-end/popover/popover-filtro/popover-filtro.page';
import { TeService } from '../../../services/te.service';

interface tea {
  nombre: string
  dificultad: number
  urlNacionalidad: string
  id: string
  foto: string
}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  public teas: any=[];

  constructor(public popoverController: PopoverController, public teService: TeService) { }

  ngOnInit() {
    this.teService.getTea().subscribe( teas =>{
      teas.map(tea => {
        const data : tea = tea.payload.doc.data() as tea;
        data.id = tea.payload.doc.id;
        this.teas.push(data);

      })
    })
  }

  async abrirPopover(event){
    const popover = await this.popoverController.create({
      component: PopoverFiltroPage,
      event
    });
   return await popover.present();
  }
}

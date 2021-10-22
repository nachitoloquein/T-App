import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TeService } from '../../../services/te.service';

@Component({
  selector: 'app-popover-filtro',
  templateUrl: './popover-filtro.page.html',
  styleUrls: ['./popover-filtro.page.scss'],
})
export class PopoverFiltroPage implements OnInit {

  teas: any=[];
  constructor(public popoverController: PopoverController, private teService: TeService) { }

  ngOnInit() {
  }

  close(){
    this.popoverController.dismiss();
  }

  /* ordenarPorNombre(){
    this.teService.OrdernarPorNombre();
    close();
  } */
}

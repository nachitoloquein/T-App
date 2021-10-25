import { Component, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TeService } from '../../../services/te.service';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  teas: any=[];

  constructor(public popoverController: PopoverController,
     private teService: TeService, private modal : ModalController) {
      this.teService.listaTeas().subscribe(tea=>{
        this.teas = tea;
    })
  }

  ngOnInit() {}


}

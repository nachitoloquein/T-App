import { Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import { PopoverController } from '@ionic/angular';
=======
>>>>>>> 0e2b269118a94fb6d2d1718a602e8f298f3bebae
import { TeService } from '../../../services/te.service';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  teas: any=[];

  constructor( private teService: TeService, private modal : ModalController) {
      this.desordenar()
  }

  ngOnInit() {}

<<<<<<< HEAD
=======
  ordenar(){
    this.teService.OrdernarPor().subscribe(tea =>{
      this.teas = tea;
    })
  }
>>>>>>> 0e2b269118a94fb6d2d1718a602e8f298f3bebae

  desordenar(){
    this.teService.listaTeas().subscribe(tea=>{
      this.teas = tea;
  })
  }
}

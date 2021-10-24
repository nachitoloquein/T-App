import { Component, OnInit} from '@angular/core';
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

  ordenar(){
    this.teService.OrdernarPor().subscribe(tea =>{
      this.teas = tea;
    })
  }

  desordenar(){
    this.teService.listaTeas().subscribe(tea=>{
      this.teas = tea;
  })
  }
}

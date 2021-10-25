import { Component, OnInit} from '@angular/core';
import { TeService } from '../../../services/te.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit{

  teas: any=[];
  opcion: string;
  tipeTea: string;
  country: string;

  constructor( private teService: TeService) {
      this.desordenar()
  }

  ngOnInit() {}

  ordenar(){
    this.teService.OrdernarPor(this.opcion).subscribe(tea =>{
      this.teas = tea;
    });
  }

  desordenar(){
    this.teService.listaTeas().subscribe(tea=>{
      this.teas = tea;
  });
  }

  filtrarPorTipoTe(){
    this.teService.FiltrarTipoTe(this.tipeTea).subscribe(tea =>{
      this.teas = tea;
    });
  }

  filtrarPorNacionalidad(){
    this.teService.FiltrarPorNacionalidad('https://www.countryflags.io/'+this.country+'/flat/64.png').subscribe(tea =>{
      this.teas = tea;
    });
  }
}

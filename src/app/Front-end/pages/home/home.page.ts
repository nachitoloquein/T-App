import { Component } from '@angular/core';
import { TeService } from '../../../services/te.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teas: any=[];
  constructor(private teService: TeService) {
    this.teService.listaTeas().subscribe(tea=>{
      this.teas = tea;
    })
  }
}

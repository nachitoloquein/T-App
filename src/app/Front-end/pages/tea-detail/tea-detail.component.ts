import { Component, OnInit } from '@angular/core';
import { Tea, TeService } from '../../../services/te.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss'],
})
export class TeaDetailComponent implements OnInit {

  constructor( private ts: TeService, private route: ActivatedRoute) { }
  public tea: Tea;

  ngOnInit() {
    const idTea =  this.route.snapshot.params['id']; 
    this.obtenerTe(idTea);
  }

  obtenerTe(idTea: string): void{
    this.ts.ObtenerTe(idTea).subscribe(tea=>{
       this.tea = tea;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { TeService } from '../../../services/te.service';
import { ActivatedRoute } from '@angular/router'
import { Tea } from 'src/app/models/tea';

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
    this.getTeaById(idTea);
  }

  getTeaById(idTea: string): void{
    this.ts.getTeaById(idTea).subscribe(tea=>{
       this.tea = tea;
      });
  }
  Like(tea){
    this.ts.likeTea(tea)
  }

  Dislike(tea){
    this.ts.dislikeTea(tea)
  }

}

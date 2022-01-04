import { Component, Input, OnInit } from '@angular/core';
import { Tea } from '../../../models/tea';
import { TeService } from 'src/app/services/te.service';

@Component({
  selector: 'app-tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss'],
})
export class TeaCardComponent implements OnInit {

  @Input() tea: Tea;
  constructor( private teService: TeService) {
    
   }

  ngOnInit() {}

  Like(tea){
    this.teService.likeTea(tea)
  }

  Dislike(tea){
    this.teService.dislikeTea(tea)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Tea } from '../../../models/tea';


@Component({
  selector: 'app-tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss'],
})
export class TeaCardComponent implements OnInit {

  @Input() tea: Tea;
  constructor() {
    
   }

  ngOnInit() {}

}

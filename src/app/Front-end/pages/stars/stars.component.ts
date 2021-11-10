import { Component, Input, OnInit } from '@angular/core';
import { Tea } from 'src/app/services/te.service';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {

  @Input() tea: Tea;
  constructor() { }

  ngOnInit() {}

}

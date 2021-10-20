import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss'],
})
export class TeaDetailComponent implements OnInit {

  public name: string;
  constructor( private navparams : NavParams) { }

  ngOnInit() {
    this.name = this.navparams.get('name')
  }

}

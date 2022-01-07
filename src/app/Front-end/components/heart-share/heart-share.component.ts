import { Component, OnInit, Input} from '@angular/core';
import { Tea } from 'src/app/models/tea';
import { TeService } from 'src/app/services/te.service';

@Component({
  selector: 'app-heart-share',
  templateUrl: './heart-share.component.html',
  styleUrls: ['./heart-share.component.scss'],
})
export class HeartShareComponent implements OnInit {

  @Input() tea: Tea;
  constructor( private teService: TeService) { }

  ngOnInit() {}

  Like(tea){
    this.teService.likeTea(tea)
  }

  Dislike(tea){
    this.teService.dislikeTea(tea)
  }

}

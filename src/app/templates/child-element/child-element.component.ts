import { Component } from '@angular/core';
import { FontSizeService } from 'src/app/service/font-size.service';

@Component({
  selector: 'app-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.scss']
})
export class ChildElementComponent {
  constructor(public fontSizeService: FontSizeService) {

  }
}

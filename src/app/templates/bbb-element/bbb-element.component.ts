import { Component } from '@angular/core';
import { FontSizeService } from 'src/app/service/font-size.service';

@Component({
  selector: 'app-bbb-element',
  templateUrl: './bbb-element.component.html',
  styleUrls: ['./bbb-element.component.scss'],
  providers: [FontSizeService]
})
export class BbbElementComponent {

  constructor(public fontSizeService: FontSizeService) {

  }

  add(): void {
    this.fontSizeService.size++;
  }

  minus(): void {
    this.fontSizeService.size--;
  }

}

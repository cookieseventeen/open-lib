import { Component } from '@angular/core';
import { FontSizeService } from 'src/app/service/font-size.service';

@Component({
  selector: 'app-aaa-element',
  templateUrl: './aaa-element.component.html',
  styleUrls: ['./aaa-element.component.scss'],
  providers: [FontSizeService]
})
export class AaaElementComponent {
  constructor(public fontSizeService: FontSizeService) {

  }


  add(): void {
    this.fontSizeService.size++;
  }

  minus(): void {
    this.fontSizeService.size--;
  }

}

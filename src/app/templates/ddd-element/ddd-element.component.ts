import { Component } from '@angular/core';
import { FontSizeService } from 'src/app/service/font-size.service';

@Component({
  selector: 'app-ddd-element',
  templateUrl: './ddd-element.component.html',
  styleUrls: ['./ddd-element.component.scss']
})
export class DddElementComponent {
  constructor(public fontSizeService: FontSizeService) {

  }

  add(): void {
    this.fontSizeService.size++;
  }

  minus(): void {
    this.fontSizeService.size--;
  }
}

import { Component, Inject } from '@angular/core';
import { FONT_SIZE_SERVICE } from 'src/app/Injection-token/font-size-service.injection-token';
import { FontSizeService } from 'src/app/service/font-size.service';




@Component({
  selector: 'app-ccc-element',
  templateUrl: './ccc-element.component.html',
  styleUrls: ['./ccc-element.component.scss']
})
export class CccElementComponent {
  constructor(@Inject(FONT_SIZE_SERVICE) public fontSizeService: FontSizeService) {

  }


  add(): void {
    this.fontSizeService.size++;
  }

  minus(): void {
    this.fontSizeService.size--;
  }
}

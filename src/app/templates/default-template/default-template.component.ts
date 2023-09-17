import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent {
  constructor(protected router: Router) {
    console.log(this.router?.config);
  }
}

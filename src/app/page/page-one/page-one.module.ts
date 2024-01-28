import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { SameComponentComponent } from 'src/app/templates/same-component/same-component.component';
import { RouterModule } from '@angular/router';
import { SameComponentModule } from 'src/app/templates/same-component/same-component.module';
import { SameTwoComponentModule } from 'src/app/templates/same-two-component/same-two-component.module';



@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SameComponentModule,
    SameTwoComponentModule
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }

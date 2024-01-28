import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { SameComponentComponent } from 'src/app/templates/same-component/same-component.component';
import { RouterModule } from '@angular/router';
import { SameComponentModule } from 'src/app/templates/same-component/same-component.module';
import { DiffenentComponentModule } from 'src/app/templates/diffenent-component/diffenent-component.module';
import { SameTwoComponentModule } from 'src/app/templates/same-two-component/same-two-component.module';



@NgModule({
  declarations: [PageTwoComponent],
  imports: [
    CommonModule,
    RouterModule,
    SameComponentModule,
    DiffenentComponentModule,
    SameTwoComponentModule
  ],
  exports: [
    PageTwoComponent,
  ]
})
export class PageTwoModule { }

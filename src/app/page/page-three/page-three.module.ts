import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeComponent } from './page-three.component';
import { DiffenentComponentModule } from 'src/app/templates/diffenent-component/diffenent-component.module';
import { RouterModule } from '@angular/router';
import { PageThreeRoutingModule } from './page-three-routing.module';



@NgModule({
  declarations: [PageThreeComponent],
  imports: [
    CommonModule,
    PageThreeRoutingModule,
    DiffenentComponentModule
  ]
})
export class PageThreeModule { }

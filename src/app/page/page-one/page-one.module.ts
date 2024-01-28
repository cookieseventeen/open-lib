import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { SameComponentModule } from 'src/app/templates/same-component/same-component.module';
import { SameTwoComponentModule } from 'src/app/templates/same-two-component/same-two-component.module';
import { PageOneComponent } from './page-one.component';


@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    SameComponentModule,
    SameTwoComponentModule
  ]
})
export class PageOneModule { }

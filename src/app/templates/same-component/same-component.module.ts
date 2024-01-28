import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameComponentComponent } from './same-component.component';



@NgModule({
  declarations: [SameComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SameComponentComponent
  ]
})
export class SameComponentModule { }

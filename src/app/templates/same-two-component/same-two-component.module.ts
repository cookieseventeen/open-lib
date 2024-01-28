import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameTwoComponentComponent } from './same-two-component.component';



@NgModule({
  declarations: [
    SameTwoComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SameTwoComponentComponent
  ]
})
export class SameTwoComponentModule { }

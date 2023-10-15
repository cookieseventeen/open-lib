import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonsComponent } from './templates/demo-buttons/demo-buttons.component';
import { DefaultTemplateComponent } from './templates/default-template/default-template.component';
import { DemoElementInjectorComponent } from './templates/demo-element-injector/demo-element-injector.component';

export const routes: Routes = [
  {
    path: 'element-injector-demo',
    component: DemoElementInjectorComponent
  },
  {
    path: 'demo-attribute',
    component: DemoButtonsComponent
  },
  {
    path: '**',
    component: DefaultTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

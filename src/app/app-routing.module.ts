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
    path: 'page-one',
    loadChildren: () =>
      import('./page/page-one/page-one.module').then(
        (m) => m.PageOneModule
      ),
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('./page/page-two/page-two.module').then(
        (m) => m.PageTwoModule
      ),
  },
  {
    path: 'page-three',
    loadChildren: () =>
      import('./page/page-three/page-three.module').then(
        (m) => m.PageThreeModule
      ),
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

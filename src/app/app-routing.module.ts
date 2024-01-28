import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonsComponent } from './templates/demo-buttons/demo-buttons.component';
import { DefaultTemplateComponent } from './templates/default-template/default-template.component';
import { DemoElementInjectorComponent } from './templates/demo-element-injector/demo-element-injector.component';
import { PageOneComponent } from './page/page-one/page-one.component';
import { PageTwoComponent } from './page/page-two/page-two.component';
import { PageThreeComponent } from './page/page-three/page-three.component';

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
    component: PageOneComponent,
    loadChildren: () =>
      import('./page/page-one/page-one.module').then(
        (m) => m.PageOneModule
      ),
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    loadChildren: () =>
      import('./page/page-two/page-two.module').then(
        (m) => m.PageTwoModule
      ),
  },
  {
    path: 'page-three',
    component: PageThreeComponent,
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

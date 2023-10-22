import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/parts/custom-button/custom-button.component';
import { PortalLayoutComponent } from './layouts/portal-layout/portal-layout.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { DemoButtonsComponent } from './templates/demo-buttons/demo-buttons.component';
import { DefaultTemplateComponent } from './templates/default-template/default-template.component';
import { DemoElementInjectorComponent } from './templates/demo-element-injector/demo-element-injector.component';
import { AaaElementComponent } from './templates/aaa-element/aaa-element.component';
import { BbbElementComponent } from './templates/bbb-element/bbb-element.component';
import { ChildElementComponent } from './templates/child-element/child-element.component';
import { CccElementComponent } from './templates/ccc-element/ccc-element.component';
import { FontSizeService } from './service/font-size.service';
import { FONT_SIZE_SERVICE } from './Injection-token/font-size-service.injection-token';
import { DddElementComponent } from './templates/ddd-element/ddd-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    PortalLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DemoButtonsComponent,
    DefaultTemplateComponent,
    DemoElementInjectorComponent,
    AaaElementComponent,
    BbbElementComponent,
    ChildElementComponent,
    CccElementComponent,
    DddElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //FontSizeService,
    {
      provide: FONT_SIZE_SERVICE,
      useClass: FontSizeService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

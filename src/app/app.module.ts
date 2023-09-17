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

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    PortalLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DemoButtonsComponent,
    DefaultTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

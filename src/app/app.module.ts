import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './common/header_App.component';
import { AppComponent } from './app.component';
import {FooterComponent} from './common/footer_App.component';
import {BodyComponent} from './common/body_App.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginComponent} from './cuenta/login.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import {Autentificacion} from './cuenta/autentificacion.service';
import { AppConfig } from './app.config';
import { RegistrarCliComponent } from './cuenta/registrar-cli/registrar-cli.component';
import {RegistrarService} from '../../src/app/cuenta/registrar-cli/registrar-cli.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    RegistrarCliComponent
  ],
  imports: [
    BrowserModule, FormsModule,
     ReactiveFormsModule,
     HttpModule,
     AppRoutingComponent
  ],
  providers: [Autentificacion, AppConfig, RegistrarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {ToastOptions , ToastModule, ToastsManager, } from 'ng2-toastr/ng2-toastr';
 export class  ToastConfiguration extends ToastOptions {
  closeButton: false;
  debug: false;
  newestOnTop: false;
  progressBar: false;
  positionClass: 'toast-top-left';
  preventDuplicates: true;
  onclick: null;
  showDuration: 300;
  hideDuration: 1000;
  timeOut: 5000;
  extendedTimeOut: 1000;
  showEasing: 'swing';
  hideEasing: 'linear';
  showMethod: 'fadeIn';
  hideMethod: 'fadeOut';
}

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
     AppRoutingComponent, ToastModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [Autentificacion, AppConfig, RegistrarService , {provide: ToastOptions, useClass: ToastConfiguration } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderApp}  from './Common/header_App.component'
import { AppComponent } from './app.component';
 import {FooterAPP}  from './Common/footer_App.component'
 import {BodyComponent} from   './Common/body_App.component'
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
  import {RouterModule,Route} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,HeaderApp,FooterAPP,BodyComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

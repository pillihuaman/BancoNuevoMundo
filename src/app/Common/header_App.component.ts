import {Component} from '@angular/core';
import {Menus} from './Menu';
import {MenuImagen} from './ImagesApp';




import {Injectable} from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';








type menubaseLaterallist = Array<Menus>;
 const lstmenus: menubaseLaterallist =
 [
 new Menus(1, 'LOGIN', 'Login to App ', '/logIn-app'),
 new Menus(1, 'REGISTRARSE' , 'Registrar to App ', ''),
 new Menus(3, 'NOVEDADES' , 'Novedades to App ', ''),
 new Menus(4, 'USUARIO', 'Usuarios to App', ''),
 new Menus(5, 'AFILIACION' , 'Afiliación to App ', ''),
 new Menus(6, 'TRANSITO', 'Transito to App ', ''),
 new Menus(7, 'SOCIOS' , 'Socios to App ', ''),
 new Menus(7, 'PRODUCTOS', 'Muestra todos los productos', '/body-producto-app'),

];
 type MenuImagenes= Array<MenuImagen>;
 const lstMenuImage =
  [ new MenuImagen (1, 'imagenlogocabecera', 'Logo de la cabecera base',
  'http://localhost:9577/api/MediaImagen?Name=LogoImagenCoorpotivof1804504-16eb-4685-b2cb-ffa20c39461fNuevoIcon.jpg', true)  ] ;
 @Component({
selector: 'app-header-component',
 templateUrl: './header_App.component.html'

 })
   export class HeaderComponent {
   comentario: string;
   title: string;
   numeracion: number;
  menubaseLateral= lstmenus;
  lstMenuImage= lstMenuImage;
  constructor() {
 this.comentario = 'Welcome to banco  nuevo mundo';
 this.title = 'NuevoMundo';
 this.numeracion = 0;
  }
   loadHeader() {
    const nombreusuario = localStorage.getItem('Correo_usuario');
    return document.getElementById('nombre_usuario').innerHTML  =  nombreusuario;

   }
   }

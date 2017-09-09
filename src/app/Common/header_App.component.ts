import {Component} from '@angular/core'
import {Menus} from  './Menu' 
import {MenuImagen} from './ImagesApp';
type menubaseLaterallist = Array<Menus>;
 var lstmenus:menubaseLaterallist=
 [
 new Menus(1,"LOGIN","Login to App ",""),
 new Menus(1,"REGISTRARSE","Registrar to App ",""),
 new Menus(3,"NOVEDADES","Novedades to App ",""),
 new Menus(4,"USUARIO","Usuarios to App ",""),
 new Menus(5,"AFILIACION","Afiliación to App ",""),
 new Menus(6,"TRANSITO","Transito to App ",""),
 new Menus(7,"SOCIOS","Socios to App ",""),
];
 type MenuImagenes=Array<MenuImagen>;
 var lstMenuImage=
 [ 
     new MenuImagen(1,"imagenlogocabecera","Logo de la cabecera base","http://localhost:9577/api/MediaImagen?Name=LogoImagenCoorpotivof1804504-16eb-4685-b2cb-ffa20c39461fNuevoIcon.jpg",true)
 ];
  /*menubase:Menus[]=[
   {id:'1',nombre:'Informes',descripcion:'Informes banco nuevo muno v1',url:'https://www.google.com.ua/search?q=fotos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXu7zKsYzWAhXMKcAKHTebD1sQ_AUICigB&biw=784&bih=743',},
   {id:'2',nombre:'Contactos',descripcion:'Contactos Version 01',url:'',},
   {id:'3',nombre:'Afiliacion',descripcion:'Afiliacion paso 1',url:'',},
   {id:'4',nombre:'Entrevistas',descripcion:'Reporte de entrevistas del dia',url:'',},
   {id:'5',nombre:'Fotos',descripcion:'Mundo de imagenes coorporativos',url:'',},
   {id:'6',nombre:'Videos',descripcion:'Videos novedades coorporativos  Banco Nuevo Mundo',url:'',},
   {id:'7',nombre:'Productos',descripcion:'Productos en exibición',url:'',},
  ];
  const menubaseLateral=[
    {id:'1',nombre:'Registrarse',descripcion:'registrarse banco nuevo muno v1',url:'https://www.google.com.ua/search?q=fotos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXu7zKsYzWAhXMKcAKHTebD1sQ_AUICigB&biw=784&bih=743',},
    {id:'2',nombre:'Login',descripcion:'Login Version 01',url:'',},
    {id:'3',nombre:'Afiliacion',descripcion:'Afiliacion paso 1',url:'',},
    {id:'4',nombre:'Vista Empresas',descripcion:'Reporte de entrevistas del dia',url:'',},
    {id:'5',nombre:'Novendades',descripcion:'Mundo de imagenes coorporativos',url:'',}
   ];

   const menubaseLateraleft=[
    {id:'1',nombre:'Noticias',descripcion:'registrarse banco nuevo muno v1',url:'https://www.google.com.ua/search?q=fotos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXu7zKsYzWAhXMKcAKHTebD1sQ_AUICigB&biw=784&bih=743',},
    {id:'2',nombre:'Importates',descripcion:'Login Version 01',url:'',},
 
   ];*/
 @Component({
selector:'header-component',
 template :` 


 <div id="sbi_camera_button" class="sbi_search">
 </div>
 <nav class="navbar navbar-default" id="navigation-purple">
 
 <div class="container">
     <a href="#"><img class="img-responsive img-circle avatar" src="{{lstMenuImage[0].url}}" alt=""></a>
     <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
         </button>
     </div>
     <div class="collapse navbar-collapse" id="myNavbar">
         <ul class="nav navbar-nav">
             <li *ngFor="let menu  of menubaseLateral"><a href="{{ menu.url}}">{{ menu.nombre}}</a></li>
         
         </ul>
     </div>
 </div>
</nav>


 `
 })
   export class HeaderApp
   {
     comentario:string;
     title:string;
     numeracion:number;
    menubaseLateral=lstmenus;
    lstMenuImage=lstMenuImage;
  constructor()
  {
 this.comentario='Welcome to banco  nuevo mundo';
 this.title='NuevoMundo';
 this.numeracion=0;


  }

   }

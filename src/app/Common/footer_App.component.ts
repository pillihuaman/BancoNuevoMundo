import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
    selector:"footer-app",
     template:` 


     <div class="row" style="text-align:center;">
         <footer class="footer-bs">
         <div class="row">
         <div class="col-md-3 footer-brand animated fadeInLeft">
         <h2>Logo</h2>
         <p>Banco nuevo mundo una entidad para el servicio de la gente desde 1900 hasta ahora en pleno compromision en el crecimiento del país</p>
         <p>© 2017 PE, All rights reserved</p>
        </div>
         </div>
         <div class="col-md-4 footer-nav animated fadeInUp">
         <h4>Menu —</h4>
         <div class="col-md-6">
             <ul class="pages">
                 <li><a href="#">Viajes</a></li>
                 <li><a href="#">Naturaleza</a></li>
                 <li><a href="#">Exploracion</a></li>
                 <li><a href="#">Ciencias</a></li>
                 <li><a href="#">Advertencia</a></li>
             </ul>
         </div>
         <div class="col-md-6">
             <ul class="list">
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Contacts</a></li>
                 <li><a href="#">Terms & Condition</a></li>
                 <li><a href="#">Privacy Policy</a></li>
             </ul>
         </div>
     </div>

     <div class="col-md-2 footer-social animated fadeInDown">
     <h4>Follow Us</h4>
     <ul>
         <li><a href="#">Facebook</a></li>
         <li><a href="#">Twitter</a></li>
         <li><a href="#">Instagram</a></li>
         <li><a href="#">RSS</a></li>
     </ul>
 </div>
 <div class="col-md-3 footer-ns animated fadeInRight">
 <h4>Lima La Victoria 315 </h4>
 </div>

 <div class="input-group">
 <input type="text" class="form-control" placeholder="Search for...">
 <span class="input-group-btn">
   <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
 </span>
</div>
     
         </footer>
     </div>

  
     
     ` ,
})

 export class FooterAPP
 {
   nombre:string;
   descripcion:string
    constructor()
    {
         this.nombre="Footer APP";
          this.descripcion="Footer banco Nuevo mundo";
    }

 }

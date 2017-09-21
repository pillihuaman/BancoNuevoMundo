import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {RegistrarService} from './registrar-cli.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-registrar-cli',
  templateUrl: './registrar-cli.component.html',
  styleUrls: ['./registrar-cli.component.css']
})
export class RegistrarCliComponent implements OnInit {
   model: any= {};
   returnurl: string;

  constructor( private route: Router , private activarouter: ActivatedRoute , private registerService: RegistrarService) { }
  ngOnInit() {
  }
  registrar() {
     this.registerService.RegistrarCliente( this.model.Direccion , this.model.Contrasenia , this.model.DNI , this.model.ApellidoPaterno,
    this.model.NombreUsuario , this.model.ApellidoMaterno, this.model.CorreoElectronico)
    .subscribe (
      data => { this.route.navigate([this.returnurl]);
      }) ;

   }
   showSuccess() {
  
  }

}


import {Injectable} from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {AppConfig} from '../../app.config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegistrarService {
model: any;
  public constructor(public http: Http, public url: AppConfig) {}
RegistrarCliente(
  Direccion: string,
  Contrasenia: string,
  DNI: string,
  ApellidoPaterno: string,
  NombreUsuario: string,
  ApellidoMaterno: string,
  CorreoElectronico: string
  ) {
  return this.http.post(
    this.url.apiUrl + '/Account/RegistrarUsuario',
       {
        Direccion: Direccion,
        Contrasenia : Contrasenia,
        DNI : DNI,
        ApellidoPaterno : ApellidoPaterno,
        NombreUsuario : NombreUsuario,
        ApellidoMaterno: ApellidoMaterno,
        CorreoElectronico: CorreoElectronico
        }).map((Response: Response) => {
         let BEusuario = new Object();
         BEusuario = Response.json();
         const  myBEusuario1 = JSON.parse(Response.json());
          console.log(typeof BEusuario, myBEusuario1);
          console.log(myBEusuario1.CorreoElectronico);
            localStorage.setItem('Correo_usuario', myBEusuario1.CorreoElectronico);
            const nombre = localStorage.getItem('Correo_usuario');
            document.getElementById('nombre_usuario').innerHTML  =  nombre;
 
        });
        }
    }

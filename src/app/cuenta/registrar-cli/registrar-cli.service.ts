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
  Address: string,
  Contrasenia: string,
  DNI: string,
  LastName: string,
  NombreUsuario: string
  ) {
  return this.http.post(
    this.url.apiUrl + '/Account/Register',
       {
        Address: Address,
        Contrasenia : Contrasenia,
        DNI : DNI,
        LastName : LastName,
        NombreUsuario : NombreUsuario
        }).map((Response: Response) => {
            const userregister = Response.json();
        });
        }
    }

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {
    Http,
    Headers,
    Response} from '@angular/http';
import { AppConfig } from '../app.config';
import {Observable} from 'rxjs/Observable';
 @Injectable()
 export class Autentificacion { constructor(private http: Http,
    private config: AppConfig) {}
    login(
        username: string ,
        password: string
    ) {
  return this.http.post(this.config.apiUrl + '/Account/Autentificacion',
 {username: username, password: password}).map((Response: Response) => {
     const user = Response.json();
        if (user && user.token) {
            localStorage.setItem('CurrenUser', JSON.stringify(user));
        }
    });
    } logout() { localStorage.removeItem('CurrenUser');
    }

 }



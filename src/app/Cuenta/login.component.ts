import {Component ,
    OnInit} from '@angular/core';
import {Router,
    ActivatedRoute} from '@angular/router';
import {Autentificacion} from './autentificacion.service';

@Component({
selector: 'app-loggin',
templateUrl: './login.component.html',
providers: [Autentificacion]
})
 export class LoginComponent implements OnInit  {
     model: any = {};
     loading = false;
     returnurl: string;
     constructor(
         private route: ActivatedRoute, private  router: Router , private authentificacion: Autentificacion) {}
    ngOnInit() {
        this.authentificacion.logout();
     this.returnurl = this.route.snapshot.queryParams['returnUrl'] || '/'; }
     login() {
         this.loading = true;
         this.authentificacion.login(this.model.username, this.model.password ).subscribe
         (
           data => { this.router.navigate([this.returnurl]);
        }); }
    }

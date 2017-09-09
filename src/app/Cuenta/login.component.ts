import {Component ,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Autentificacion} from './autentificacion.service';
@Component({
selector:"app-loggin",
templateUrl:'./login.component.html'
})
 export class LoginAppWallet implements OnInit
 {
    
model:any={};
loading=false;
returnUrl:string;
 constructor(
     private route:ActivatedRoute,
     private router:Router,
     private autentificationsservice:Autentificacion
 )
 {}

 ngOnInit()
 {
 debugger;
     this.autentificationsservice.logout();
      this.returnUrl=this.route.snapshot.queryParams["returnURl"]|| '/';
 }
 login()
 {
 this.loading=true;
 this.autentificationsservice.login(this.model.username,this.model.password)
 .subscribe(
data=>{
this.router.navigate([this.returnUrl]);
this.loading=false;});

 }


 }
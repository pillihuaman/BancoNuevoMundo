import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from '../common/header_App.component';
import {FooterComponent} from '../common/footer_App.component';
import {BodyComponent} from '../common/body_App.component';
import {LoginComponent} from '../cuenta/login.component';
import {RegistrarCliComponent} from '../cuenta/registrar-cli/registrar-cli.component';
const routes: Routes =
[
  {path: 'logIn-app', component: LoginComponent},
  {path: 'body-producto-app', component: BodyComponent},
  {path: 'registrar-app' , component: RegistrarCliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingComponent  {
}

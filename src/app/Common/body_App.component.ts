 import {Component} from '@angular/core';
 import {Http  , Response} from '@angular/http';
 import 'rxjs/add/operator/map';
@Component({
 selector: 'app-boby-component',
 template: `<br>
 <hr>
 <div class="row" >
 <div class=container>
 <div *ngFor="let objFotoProducot of data , let i=index"  class="col-sm-4">
 <a href="{{objFotoProducot.beFoto.rutafoto}}"><img width="350" height="300" src="{{objFotoProducot.beFoto.rutafoto}}"></a>
 
 <div class="caption">
 <div class="textProducto">{{objFotoProducot.producto.descripcion}}</div>
 <h4>
     <a class="btn btn-primary crearPedido btlDetalle" href="#">Comprar</a>
     <a class="btn ">Ver detalle</a>
     <a class="btn btnAgregarProducto">
     <label id="@modelo.Producto.codigo" data-toggle="modal" data-target="#Modal1" style="font-weight:normal">Agregar</label>
     <i class="icon-shopping-cart"></i></a>
     <a class="text-left small" href="#"><span class="textProducto textProductoPrecio">{{objFotoProducot.producto.precio}} s/.</span></a>
 </h4>
</div>
 </div>
 </div>
 </div>
 `
})
 export class BodyComponent {
 private ApiUrl= 'http://localhost:7688/Producto/ProductosLista';
 data: any= {};
  Contandor: number;
 constructor(private http: Http) {
 this.getFotoProducto();
 const lst_ModeloData = this.getData();
}
 getFotoProducto() {
  return this.http.get(this.ApiUrl).map((res: Response) => res.json() ); }
 getData() {
this.getFotoProducto().subscribe(data => {
console.log(data);
this.data = data;
 let   MPModeloFotoProducto = new Object();
 MPModeloFotoProducto = data; });
  }
 }

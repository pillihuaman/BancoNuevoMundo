export class Menus
{
 public  id:Number;
 public nombre:string;
 public descripcion:string
 public   url:string

 public constructor(id:number,nombre:string,descripcion:string, url:string)
{

this.id=id;
this.nombre=nombre;
this.descripcion=descripcion;
this.url=url;
}
}
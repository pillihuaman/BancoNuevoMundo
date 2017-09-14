export class MenuImagen {
id: number;
nombre: string;
descripcion: string;
url: string;
estado: boolean;

 constructor(id: number, nombre: string, descripcion: string, url: string, estado: boolean) {
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.url = url;
  this.estado = estado; } 
}

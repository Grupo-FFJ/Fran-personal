import { Publicaciones } from "./publicacion.js";

export class PublicacionVenta extends Publicaciones{
    stock = 1
    constructor(titulo, descripcion, autor, precio, stock){
        super(titulo,descripcion,autor)
        this.precio = precio
        this.stock = stock
    }
    

}
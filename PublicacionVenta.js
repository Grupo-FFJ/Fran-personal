import { Publicacion } from "./Publicacion.js";

export class PublicacionVenta extends Publicacion{
    stock = 1
    constructor(titulo, descripcion, autor, precio, stock){
        super(titulo,descripcion,autor)
        this.precio = precio
        this.stock = stock
    }
    mostrarResumenVenta(){
        super.mostrarResumen()
        return `Precio:${this.precio}`
    }
    

}
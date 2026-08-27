import { Publicacion } from "./publicacion.js";

export class PublicacionServicio extends Publicacion{
    constructor(titulo, descripcion, autor, modalidad,duracion){
        super(titulo,descripcion,autor)
        this.modalidad = modalidad
        this.duracion = duracion
        this.cliente = autor
    }
    mostrarResumenServicio(){
        super.mostrarResumen()
        return `Modalidad:${this.modalidad} Duracion:${this.duracion}`
    }
}
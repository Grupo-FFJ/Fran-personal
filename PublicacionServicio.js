import { Publicaciones } from "./publicacion.js";

export class PublicacionServicio extends Publicaciones{
    constructor(titulo, descripcion, autor, modalidad,duracion){
        super(titulo,descripcion,autor)
        this.modalidad = modalidad
        this.duracion = duracion
    }
}
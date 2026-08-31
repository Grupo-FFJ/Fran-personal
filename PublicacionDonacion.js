import { Publicacion } from "./publicacion.js";
export class PublicacionDonacion extends Publicacion{
    constructor(titulo, descripcion, autor, motivo){
        super(titulo,descripcion,autor)
        this.motivo = motivo
    }
}
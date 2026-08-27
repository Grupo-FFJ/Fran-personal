import { Usuario } from "./Usuario.js"
export class Publicacion{
    constructor(titulo, descripcion, autor){
        this.titulo = titulo
        this.descripcion = descripcion
        this.autor = autor
        this.fechaPublicacion = new Date()
        this.activa = true
    }

    mostrarResumen(){
        return `${this.titulo} - ${this.autor.nombre}`
    }
    estaActiva(){
        return this.activa
    }
}

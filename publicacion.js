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
    diasPublicada(){
        const ms = new Date() - this.fechaPublicacion
        return Math.floor(ms / (1000 * 60 * 60 * 24))
    }
}

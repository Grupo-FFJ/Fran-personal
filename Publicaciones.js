import { Usuario } from "./Usuario.js"
export class Publicaciones{
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

const user1 = new Usuario("Franco","fran@gmail.com")
const publi6 = new Publicaciones("zzzz","ssss",user1)
console.log(publi6)
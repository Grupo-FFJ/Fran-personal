export class RepositorioPublicaciones{
    constructor(){
        this.publicaciones = []
    }
    agregarPublicaciones(publicacion){
        this.publicaciones.push(publicacion)
    }
    buscarPorUsuario(nombre){
        const publiUser = this.publicaciones.filter(p => p.autor.nombre === nombre)
        return publiUser
    }
    filtrarActivas(){
        const publisActivas = this.publicaciones.forEach(p => p.activa === true)
        return publisActivas
    }
    catidadTotal(){
        let contador = 0
        for(let i=0; i<this.publicaciones.length; i++){
            contador = contador + 1
        }
        return contador
    }
    listarResumen(){
        return this.publicaciones.map()
    }
    filtrarPorTipo(clase){
        return this.publicaciones.filter(publicacion => publicacion instanceof clase)
    }
}


import { Publicacion } from "./publicacion.js";
import { Usuario } from "./Usuario.js"
import { RepositorioPublicaciones } from "./RepositorioPublicaciones.js";
import { PublicacionVenta } from "./PublicacionVenta.js";
import { PublicacionServicio } from "./PublicacionServicio.js";
// const publi1 = new Publicaciones("libro","matematica","franco")
// const publi2 = new Publicaciones("lapicera","color azul","fede")
// const publi3 = new Publicaciones("cuadernillo","cuadriculado","joaquin")
// const publi4 = new Publicaciones("lapiz","color rojo","luciana")
// const publi5 = new Publicaciones("cuaderno","rallado","franco")

// const publicaciones = [publi1,publi2,publi3,publi4,publi5]

// publicaciones.forEach((Publicaciones) =>{
//     console.log(Publicaciones)
// })

// publi5.activa = false
// console.log(publi5)

// let contador = 0
// for(let i=0; i<publicaciones.length; i++){
//     if(publicaciones[i].activa === true){
//         contador = contador + 1
//         console.log(publicaciones[i].titulo)
//     }
// }
// console.log(contador)

// const publicacionesJSON = JSON.stringify(publicaciones, null, 2)
// console.log(publicacionesJSON)

const user1 = new Usuario("Franco","fran@gmail.com")
const user2 = new Usuario("fede","fede@gmail.com")
const user3 = new Usuario("rodrigo","rodrigo@gmail.com")

const publi6 = new PublicacionServicio("lapicera","color azul",user1,"presencial",30)
const publi7 = new PublicacionServicio("cuadernillo","cuadriculado",user2,"virtual",60)
const publi8 = new PublicacionVenta("lapiz","color rojo",user3,300,3)
const publi9 = new PublicacionVenta("cuaderno","rallado",user1,400,5)

const nuevasPublicaciones = [publi6,publi7,publi8,publi9]

nuevasPublicaciones.forEach((Publicacion =>{
    console.log(Publicacion)
}))


// const publiActiva = nuevasPublicaciones.filter(p => p.estaActiva())
// console.log(publiActiva)

// const primeraPubli = nuevasPublicaciones.find(p => p.autor.nombre === user1.nombre)
// console.log(primeraPubli)

// const repoPubli = new RepositorioPublicaciones()
// nuevasPublicaciones.forEach(p => repoPubli.agregarPublicaciones(p))
// console.log(repoPubli)

// const busquedaPorUser = new RepositorioPublicaciones()
// nuevasPublicaciones.forEach(p => busquedaPorUser.buscarPorUsuario(p.autor.nombre))
// console.log(busquedaPorUser)

// const publi = new Publicacion("fdssss","dsdsddsd","franco")
// function validarPublicacion(publicacion,reglas){
//     if((publicacion.titulo).length>=reglas.minTitulo && (publicacion.titulo).length<=reglas.maxTitulo){
//         return true
//     }

// }




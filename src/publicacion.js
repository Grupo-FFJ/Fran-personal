import { Usuario } from "./Usuario.js"

export const CATEGORIAS_PERMITIDAS = ["general","aviso","evento","compraventa"]

export class Publicacion{
    constructor(titulo, descripcion, autor, categoria = "general"){
        if(!autor?.trim()){
            throw new Error("El autor es obligatorio")
        }
        const tituloNormalizado = titulo?.trim() ?? ""
        if(tituloNormalizado.length < 5 || tituloNormalizado.length > 80){
            throw new Error("El titulo debe tener entre 5 y 80 caracteres")

        }
        const descripcionNormalizado = descripcion?.trim() ?? ""
        if(descripcionNormalizado.length < 20 || descripcionNormalizado.length > 500){
            throw new Error("La descripcion debe tener entre 20 y 500 caracteres")
        }
        if(!CATEGORIAS_PERMITIDAS.includes(categoria)){
            throw new Error(`La categoria debe ser una de: ${CATEGORIAS_PERMITIDAS.join("")}`)
        }
        this.titulo = tituloNormalizado
        this.descripcion = descripcionNormalizado
        this.autor = autor.trim()
        this.categoria = categoria
        this.fechaPublicacion = new Date()
        this.activa = true
        this.etiquetas = []
        this.reportes = []
        this.estado = "pendiente"
    }
    get resumen(){
        return `Autor:${this.autor} - Titulo:${this.titulo} - Estado:${this.activa}`
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
    darDeBaja() { this.activa = false; }
    destacar(){
        
    }

    agregarEtiqueta(etiqueta){
        const normalizada = etiqueta.trim();
        if (!normalizada) {
        throw new Error("Etiqueta inválida");
        }
        const yaExiste = this.tieneEtiqueta(normalizada);
        if (!yaExiste) {
        this.etiquetas.push(normalizada);
        }
    }
    tieneEtiqueta(etiqueta) {
    const buscada = etiqueta.trim().toLowerCase();
    return this.etiquetas.some(e => e.toLowerCase() === buscada);
    }

    reportar(usuario, motivo){
        const yaReporto = this.reportes.some(r => r.usuario === usuario);
        if (yaReporto) {
        throw new Error("El usuario ya reportó esta publicación");
        }
        this.reportes.push(new Reporte(usuario, motivo));
    }

    requiereRevision() {
    return this.reportes.length >= 3;
    }

    async revisar(servicioModeracion) {
        const decision = await servicioModeracion.evaluar(this);
        if (decision === "aprobado") {
        this.estado = "aprobada";
        } else if (decision === "rechazado") {
        this.estado = "rechazada";
        } else {
        throw new Error("Decisión de moderación inválida");
        }
        return this.estado
    }
}

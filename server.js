import express from "express";
import path from "path"
import { fileURLToPath } from "url";
import { Publicacion } from "./src/publicacion.js";
import { RepositorioPublicaciones} from "./src/RepositorioPublicaciones.js"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();
app.use(express.static(path.join(__dirname,"public")));

//TP 16 PARTE 3
app.use(express.urlencoded({ extended: false}))
app.post("/publicaciones", (req, res)=>{
    try{
        const publicacion = new Publicacion(req.body.autor, req.body.titulo, req.body.descripcion, req.body.categoria)
        RepositorioPublicaciones.agregarPublicaciones(publicacion)
        res.status(201).send(publicacion.mostrarResumen())
    }catch(error){
        res.status(400).send(error.message)
    }
})
// const publicaciones=[{titulo:"curso quimica",descripcion:"curso virtual",autor:"fran"},{titulo:"curso matematica",descripcion:"curso presencial",autor:"fede"},{titulo:"resumen de POO",descripcion:"apuntes de clase",autor:"luciana"},{titulo:"apuntes de AMI",descripcion:"analisis matematico i",autor:"romina"}];
// app.get("/api/publicaciones",async(req,res)=>{await new Promise(r=>setTimeout(r,900));if(req.query.error==="1")return res.status(500).json({mensaje:"No pudimos consultar las publicaciones"});res.json(publicaciones);});

app.get("/estado-comunidad", (req, res) => {
    res.send(repositorio.obtenerEstado)
})

app.listen(3000, () => console.log("Gestor publicaciones en http://localhost:3000"));


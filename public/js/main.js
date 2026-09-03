import { Usuario } from "./Usuario.js"
import { PublicacionVenta } from "./PublicacionVenta.js"
import { PublicacionServicio } from "./PublicacionServicio.js"
//==============================================================================================

// PARTE 2
const titulo = document.getElementById("titulo")
const tipo = document.getElementById("tipo")
const autor = document.getElementById("autor")
const vistaPrevia = document.getElementById("vista-previa")
const camposEspecificos = document.getElementById("campos-especificos")
const ayudaEmail = document.getElementById("ayuda-email")
const email = document.getElementById("email")
const formulario = document.getElementById("formulario")
const lista = document.getElementById("lista-publicaciones")

function observarEvento(evento) {
  console.table({
    type: evento.type,
    target: evento.target.id,
    currentTarget: evento.currentTarget.id,
    timeStamp: Math.round(evento.timeStamp)
  });
}
titulo.addEventListener("input", observarEvento);
tipo.addEventListener("change", observarEvento);

//PARTE 3
function actualizarVistaPrevia() {
  const nombre = autor.value || "Autor";
  const texto = titulo.value || "Sin título";
  vistaPrevia.textContent = `${texto} — ${nombre} (${tipo.value})`;
}
titulo.addEventListener("input", actualizarVistaPrevia);
autor.addEventListener("input", actualizarVistaPrevia);
tipo.addEventListener("change", actualizarVistaPrevia);

//PARTE 4
function actualizarCamposEspecificos() {
  if (tipo.value === "venta") {
    camposEspecificos.innerHTML = `
      <input id="precio" type="number" placeholder="Precio">
      <input id="stock" type="number" value="1">`;
  } else {
    camposEspecificos.innerHTML = `
      <select id="modalidad">
        <option>presencial</option><option>virtual</option>
      </select>
      <input id="duracion" type="number" placeholder="Minutos">`;
  }
}
tipo.addEventListener("change", actualizarCamposEspecificos);
actualizarCamposEspecificos();

// PARTE 5
function mostrarAyudaEmail() {
  ayudaEmail.textContent = "Usá un email válido del autor";
}
function ocultarAyudaEmail() { ayudaEmail.textContent = ""; }
email.addEventListener("focus", mostrarAyudaEmail);
email.addEventListener("blur", ocultarAyudaEmail);

// PARTE 6
const publicaciones = [];
function crearPublicacionDesdeFormulario() {
  const usuario = new Usuario(autor.value, email.value);
  if (tipo.value === "venta") {
    return new PublicacionVenta(
      titulo.value, descripcion.value, usuario,
      Number(document.querySelector("#precio").value)
    );
  }
  return new PublicacionServicio(
    titulo.value, descripcion.value, usuario,
    document.querySelector("#modalidad").value,
    Number(document.querySelector("#duracion").value)
  );
}
function agregarTarjeta(publicacion){
  const tarjeta = document.createElement("article")
  tarjeta.classList.add("tarjeta")
  tarjeta.setAttribute("data-id", Date.now())
  const titulo = document.createElement("h3")
  titulo.textContent = publicacion.titulo
  const descripcion = document.createElement("p")
  descripcion.textContent = publicacion.descripcion
  const estado = document.createElement("p")
  estado.textContent = publicacion.activa
  const boton = document.createElement("button")
  boton.textContent = "Dar de baja"
  boton.setAttribute("data-accion","baja")
  function manejarBaja(evento){
    console.log(evento.type, evento.target)
    publicacion.darDeBaja()
    estado.textContent = "inactiva"
    boton.disabled = true
  }
  // boton.addEventListener("click",manejarBaja)
  const botonDes = document.createElement("button")
  botonDes.textContent = "Destacar"
  botonDes.setAttribute("data-accion","destacar")
  tarjeta.append(titulo,descripcion,estado,boton,botonDes)
  lista.appendChild(tarjeta)
}

function manejarEnvio(evento) {
  evento.preventDefault();
  const publicacion = crearPublicacionDesdeFormulario();
  publicaciones.push(publicacion);
  agregarTarjeta(publicacion);
  formulario.reset();
  actualizarCamposEspecificos();
  actualizarVistaPrevia();
}
formulario.addEventListener("submit", manejarEnvio);



function observarClick(evento) {
console.log("target", evento.target);
console.log("currentTarget", evento.currentTarget);
}
lista.addEventListener("click", observarClick);

// TP 9 PARTE 3
function manejarAccion(evento) {
const boton = evento.target.closest("button[data-accion]");
if (!boton || !lista.contains(boton)) return;
const tarjeta = boton.closest("[data-id]");
const id = Number(tarjeta.dataset.id);
console.log(id, boton.dataset.accion);
}
lista.addEventListener("click", manejarAccion);


import { RepositorioPublicaciones } from "../public/js/RepositorioPublicaciones.js";
import { Publicacion } from "../public/js/publicacion.js";
 
describe("RepositorioPublicaciones", () => {
  test("buscarPorEtiqueta devuelve coincidencias activas", () => {
    const repositorio = new RepositorioPublicaciones();
    const publicacion = new Publicacion("redes", "Apuntes de Redes", "ana");
    publicacion.agregarEtiqueta("redes");
    repositorio.agregarPublicaciones(publicacion);
 
    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([publicacion]);
  });
 
  test("una publicación dada de baja queda excluida", () => {
    const repositorio = new RepositorioPublicaciones();
    const publicacion = new Publicacion("redes", "Apuntes de Redes", "ana");
    publicacion.agregarEtiqueta("redes");
    publicacion.darDeBaja();
    repositorio.agregarPublicaciones(publicacion);
 
    expect(repositorio.buscarPorEtiqueta("redes")).toEqual([]);
  });
 
  test("una etiqueta inexistente devuelve un arreglo vacío", () => {
    const repositorio = new RepositorioPublicaciones();
    expect(repositorio.buscarPorEtiqueta("inexistente")).toEqual([]);
  });
});
import { RepositorioPublicaciones } from "../public/js/RepositorioPublicaciones.js";
import { Publicacion } from "../public/js/publicacion.js";
import { PublicacionServicio } from "../public/js/PublicacionServicio.js";
import { PublicacionVenta } from "../public/js/PublicacionVenta.js";

test("cada subclase arma su propio resumen", () => {
  const venta = new PublicacionVenta("dispositivo", "Calculadora", "ana", 5000);
  const servicio = new PublicacionServicio("Clases de Álgebra", "clases","luis", "virtual",45);
 
  expect(venta.mostrarResumenVenta()).toContain("$5000");
  expect(servicio.mostrarResumenServicio()).toContain("Clases de Álgebra");
});
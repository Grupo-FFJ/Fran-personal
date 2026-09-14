import { GestorNotificaciones } from "../public/js/GestorNotificaciones.js";
import { NotificadorWeb } from "../public/js/NotificadorWeb.js";
import { NotificadorEmail } from "../public/js/NotificadorEmail.js";
import { Publicacion } from "../public/js/publicacion.js";

test.each([
[new NotificadorWeb(), "Notificación web: Tu publicación fue aprobada"],
[new NotificadorEmail(), "Email enviado: Tu publicación fue aprobada"],
])("cada canal notifica según su propio formato", (notificador, esperado) => {
const gestor = new GestorNotificaciones();
expect(gestor.enviar(notificador, "Tu publicación fue aprobada")).toBe(esperado);
});

describe("Publicacion.revisar", () => {
  test("aprueba la publicación cuando el servicio resuelve aprobado", async () => {
    const servicio = { evaluar: async () => "aprobado" };
    const publicacion = new Publicacion("Ana", "Apuntes de Redes", "...");
    await expect(publicacion.revisar(servicio)).resolves.toBe("aprobada");
    expect(publicacion.estado).toBe("aprobada");
  });
 
  test("rechaza la publicación cuando el servicio resuelve rechazado", async () => {
    const servicio = { evaluar: async () => "rechazado" };
    const publicacion = new Publicacion("Ana", "Apuntes de Redes", "...");
    await expect(publicacion.revisar(servicio)).resolves.toBe("rechazada");
  });
 
  test("conserva el estado pendiente si el servicio falla", async () => {
    const servicio = {
      evaluar: async () => { throw new Error("Servicio no disponible"); }
    };
    const publicacion = new Publicacion("Ana", "Apuntes de Redes", "...");
    await expect(publicacion.revisar(servicio)).rejects.toThrow("Servicio no disponible");
    expect(publicacion.estado).toBe("pendiente");
  });
});
/**
 * Servicio de contacto (placeholder).
 *
 * Actualmente implementado como una clase estática que simula el envío de un
 * mensaje (retorna una promesa que se resuelve después de un pequeño retardo).
 *
 * Recomendación: convertir en `@Injectable({providedIn: 'root'})` y reemplazar
 * `sendMessage` por una implementación que llame a un backend real (API, función
 * serverless, servicio de email) para producción.
 */
export class ContactService {
  /**
   * Simula el envío de un mensaje. Recibe `data` del formulario y devuelve una promesa.
   * @param data Objeto con los campos del formulario (nombre, email, mensaje...)
   */
  static async sendMessage(data: any) {
    // Placeholder: aquí puedes integrar un email API (SendGrid, Netlify Functions, etc.)
    // Acepta campos opcionales para evitar errores de tipado desde formularios.
    return new Promise((res) => setTimeout(res, 600));
  }

  // Método de instancia que delega en la implementación estática.
  // Mantiene compatibilidad si el servicio se inyecta más adelante.
  sendMessage(data: any) { return ContactService.sendMessage(data); }
}

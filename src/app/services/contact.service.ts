export class ContactService {
  static async sendMessage(data: any) {
    // Placeholder: aquí puedes integrar un email API (SendGrid, Netlify Functions, etc.)
    // Acepta campos opcionales para evitar errores de tipado desde formularios.
    return new Promise((res) => setTimeout(res, 600));
  }

  // Para inyectar más tarde como servicio real, puedes convertir esta clase en @Injectable
  sendMessage(data: any) { return ContactService.sendMessage(data); }
}

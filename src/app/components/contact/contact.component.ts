import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { PERSONAL_DATA, PersonalDataHelper } from '../../config/personal-data.config';

/**
 * ========================================
 * Componente de Contacto
 * 
 * Gestiona el formulario de contacto con:
 * - Validación reactiva (nombre, email, mensaje)
 * - Integración dinámica con WhatsApp
 * - Mensajes de error/éxito inline
 * - Accesibilidad (aria-live, aria-invalid, aria-busy)
 * - Datos centralizados desde personal-data.config
 * ========================================
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // ========== Propiedades del Formulario ==========
  /** Formulario reactivo creado con FormBuilder para gestionar inputs de contacto */
  form: any;

  /** Indicador para deshabilitar el formulario mientras se envía (previene envíos duplicados) */
  sending = false;

  /** Mensaje de éxito mostrado al enviar correctamente el formulario */
  successMessage?: string;

  /** Mensaje de error mostrado si ocurre un problema al enviar */
  errorMessage?: string;

  /** Referencia al input de nombre para devolver foco después de enviar */
  @ViewChild('contactName', { static: false }) contactNameInput?: ElementRef<HTMLInputElement>;

  /** Expone encodeURIComponent para que las plantillas puedan usarlo de forma segura */
  encodeURIComponent = (s: string) => encodeURIComponent(s);

  /** Datos personales centralizados */
  personalData = PERSONAL_DATA;

  // ========== Propiedades Getter ==========
  /**
   * Genera dinámicamente el href de WhatsApp usando valores del formulario.
   * 
   * Construye un mensaje con nombre y mensaje del usuario, codificado en URL.
   * Si hay error, retorna URL base a WhatsApp del archivo de configuración.
   * 
   * @returns URL de WhatsApp con parámetro "text" prellenado
   */
  get whatsappHref(): string {
    try {
      const name = (this.form?.get('name')?.value || '').toString().trim();
      const message = (this.form?.get('message')?.value || '').toString().trim();
      const base = `https://wa.me/${this.personalData.contact.phoneRaw}?text=`;
      const textParts: string[] = [];
      if (name) textParts.push(`Hola ${this.personalData.fullName.split(' ')[0]}, soy ${name}.`);
      else textParts.push(`Hola ${this.personalData.fullName.split(' ')[0]}`);
      if (message) textParts.push(message);
      else textParts.push('Quisiera hablar sobre tu portafolio.');
      return base + encodeURIComponent(textParts.join(' '));
    } catch {
      return this.personalData.socialLinks.whatsapp.url;
    }
  }

  // ========== Constructor ==========
  /**
   * Inicializa el componente y crea el formulario reactivo con validaciones.
   * 
   * @param fb FormBuilder de Angular para construir FormGroup
   */
  constructor(private fb: FormBuilder) {
    // Define el formulario con campos y sus validadores
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // ========== Métodos de Envío ==========
  /**
   * Envía el formulario mediante `ContactService.sendMessage()`.
   * 
   * Flujo de ejecución:
   * 1. Valida que el formulario sea válido (required, email format, etc.)
   * 2. Valida longitud mínima del mensaje (10 caracteres)
   * 3. Establece `sending = true` para deshabilitar inputs
   * 4. Intenta enviar el mensaje usando ContactService
   * 5. Si éxito: muestra mensaje, resetea formulario, devuelve foco a nombre
   * 6. Si error: muestra mensaje de error
   * 7. Finalmente: establece `sending = false` para habilitar inputs nuevamente
   * 
   * Nota: Los mensajes se muestran en aria-live region para accesibilidad.
   */
  async submit() {
    // Marca todos los campos como "tocados" para mostrar errores de validación
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Valida longitud mínima del mensaje (regla adicional de negocio)
    const msg = (this.form.get('message')?.value || '').toString().trim();
    const MIN_MSG = 10;
    if (msg.length < MIN_MSG) {
      this.errorMessage = `El mensaje debe tener al menos ${MIN_MSG} caracteres.`;
      return;
    }

    // Inicia envío: deshabilita el formulario y limpia mensajes previos
    this.sending = true;
    this.successMessage = undefined;
    this.errorMessage = undefined;
    try {
      // Intenta enviar el mensaje mediante servicio de contacto
      await ContactService.sendMessage(this.form.value as any);
      // Éxito: muestra mensaje de confirmación
      this.successMessage = 'Mensaje enviado. ¡Gracias!';
      // Resetea el formulario para que el usuario pueda enviar otro
      this.form.reset();
      // Devuelve el foco al campo de nombre para mejor experiencia de usuario
      try { this.contactNameInput?.nativeElement?.focus(); } catch {}
    } catch (e) {
      // Error: muestra mensaje de error
      this.errorMessage = 'Error al enviar. Intenta de nuevo.';
    } finally {
      // Finaliza: habilita el formulario nuevamente
      this.sending = false;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /**
   * Formulario reactivo para la sección de contacto.
   * - `form`: instancia del FormGroup creada con FormBuilder.
   * - `sending`: indicador para deshabilitar el formulario mientras se envía.
   */
  form: any;

  sending = false;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con validaciones básicas
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  /**
   * Envía el formulario mediante `ContactService`.
   * - Valida que el formulario sea válido antes de enviar.
   * - Muestra alertas simples como feedback; en producción reemplazar por toasts.
   */
  async submit() {
    if (this.form.invalid) return;
    this.sending = true;
    try {
      await ContactService.sendMessage(this.form.value as any);
      alert('Mensaje enviado. ¡Gracias!');
      this.form.reset();
    } catch (e) {
      alert('Error al enviar. Intenta de nuevo.');
    } finally {
      this.sending = false;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_DATA, PersonalDataHelper } from '../../config/personal-data.config';

/**
 * ========================================
 * Componente: FooterComponent
 * 
 * Propósito: Pie de página del portafolio con información de contacto,
 * marca personal, y enlaces a redes sociales.
 * 
 * Características:
 * - Año dinámico para copyright actualizado automáticamente
 * - Enlaces a redes sociales (GitHub, Instagram, WhatsApp)
 * - Información de contacto (teléfono, emails)
 * - Enlaces a políticas de privacidad y términos
 * - Responsive: stack vertical en móvil
 * - Accesibilidad: aria-live, rel="noopener noreferrer"
 * - Datos centralizados desde personal-data.config
 * ========================================
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**
   * Propiedad: año dinámico
   * Se calcula automáticamente en cada renderizado para mantener
   * el copyright siempre actualizado sin necesidad de mantenimiento manual.
   */
  year = new Date().getFullYear();

  /**
   * Datos personales centralizados
   */
  personalData = PERSONAL_DATA;
  dataHelper = PersonalDataHelper;
}

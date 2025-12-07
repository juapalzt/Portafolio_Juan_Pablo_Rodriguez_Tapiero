import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../config/personal-data.config';

/**
 * ========================================================
 * COMPONENTE: AboutComponent (Sobre mí)
 * ========================================================
 * 
 * RESPONSABILIDAD:
 * Mostrar información profesional resumida del desarrollador
 * con enfoque en habilidades, herramientas y especialidades.
 * 
 * CARACTERÍSTICAS PRINCIPALES:
 * - Descripción ejecutiva del perfil profesional desde personal-data.config
 * - Tres tarjetas interactivas con categorías fijas
 * - Iconos emoji para identificación visual rápida
 * - Grid responsivo que adapta columnas dinámicamente
 * - Tarjetas con hover effects animados y sombras
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA labels, roles semánticos, focus states
 * 
 * ESTILOS Y ANIMACIONES:
 * - Gradientes: Títulos con gradient de acento1→acento2
 * - Hover: Traslación -6px, sombra expandida, borde destaca
 * - Iconos: Contenedores circulares con scale 1.15 + rotate -5deg en hover
 * - Transiciones: 280ms cubic-bezier(0.2, 0.9, 0.3, 1)
 * - Responsive: 3 columnas (desktop) → 2 (tablet) → 1 (mobile)
 * 
 * ACCESIBILIDAD:
 * - role="region" en sección principal
 * - role="list" en grid de tarjetas
 * - role="listitem" en cada tarjeta
 * - aria-labelledby vinculando títulos
 * - aria-hidden en iconos emoji (decorativos)
 * - focus-visible para navegación por teclado
 * - Suficiente contraste de colores en ambos temas
 * - Semántica HTML5: section, article, header, strong
 * 
 * RESPONSIVE DESIGN:
 * - Desktop (>768px): 3 columnas automáticas
 * - Tablet (768px-480px): 2 columnas
 * - Mobile (<480px): 1 columna
 * - Ajustes de tamaño de fuente y espaciado
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  personalData = PERSONAL_DATA;

  /**
   * Constructor del componente
   */
  constructor() {}

  /**
   * Separa el perfil laboral en párrafos individuales
   * @returns Array de párrafos
   */
  getProfileParagraphs(): string[] {
    return this.personalData.workProfile
      .split('\n\n')
      .filter(p => p.trim().length > 0)
      .map(p => p.trim());
  }
}

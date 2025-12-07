import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvViewerComponent } from '../cv-viewer/cv-viewer.component';
import { PERSONAL_DATA } from '../../config/personal-data.config';

/**
 * ========================================================
 * COMPONENTE: HeroComponent (Sección Principal)
 * ========================================================
 * 
 * RESPONSABILIDAD:
 * Mostrar la sección hero de presentación principal del portafolio
 * con contenido, botones de acción, foto de perfil interactiva
 * y modales para vista previa de imagen y CV.
 * 
 * CARACTERÍSTICAS PRINCIPALES:
 * - Contenido de texto: Nombre, profesión, descripción ejecutiva
 * - Tres botones principales con estilos diferenciados:
 *   • Descargar CV (Primary): descarga PDF directa
 *   • Contáctame (Secondary): enlace ancla a sección contacto
 *   • Ver CV (Secondary): abre visor integrado
 * - Foto de perfil clickeable con lazy loading
 * - Modal de vista previa de imagen ampliada
 * - Visor de CV integrado (CvViewerComponent)
 * - Datos centralizados desde personal-data.config.ts
 * - Animaciones suaves y transiciones
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA roles, keyboard navigation
 * 
 * ESTILOS Y ANIMACIONES:
 * - Gradientes: Título con gradient de acento
 * - Hover: Imagen elevación, sombra expandida
 * - Overlay: Opacidad 0→1 en hover
 * - Responsive: Row (desktop) → Column (mobile)
 * 
 * ACCESIBILIDAD:
 * - role="banner" en sección principal
 * - role="button" en imagen clickeable con tabindex
 * - aria-label en botones e imagen
 * - role="toolbar" en grupo de acciones
 * - role="dialog" en modal de imagen
 * - Soporta navegación con Enter y Space
 * - Focus-visible en botones y controles
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, CvViewerComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  personalData = PERSONAL_DATA;

  /**
   * Controla la visibilidad del visor de CV
   * @type {boolean}
   */
  showCv = false;

  /**
   * Ruta al archivo PDF del CV - desde configuración centralizada
   * @type {string}
   */
  get cvSrc(): string {
    return this.personalData?.documents?.cv || 'Hoja de vida - Juan Pablo Rodriguez Tapiero.pdf';
  }

  /**
   * Controla la visibilidad del modal de vista previa de imagen
   * @type {boolean}
   */
  showImagePreview = false;

  /**
   * Alterna la visualización del CV (modal/inline dependiendo del componente)
   * Muestra u oculta el visor de CV integrado
   * 
   * @returns {void}
   */
  toggleCv(): void {
    this.showCv = !this.showCv;
  }

  /**
   * Abre el modal de vista previa de imagen
   * Se ejecuta al hacer clic en la foto de perfil
   * Soporta activación por Enter y Space
   * 
   * @returns {void}
   */
  openImagePreview(): void {
    this.showImagePreview = true;
    // Opcionalmente, agregar clase a body para deshabilitar scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Cierra el modal de vista previa de imagen
   * Se ejecuta al hacer clic fuera o en el botón cerrar
   * También se dispara con tecla ESC
   * 
   * @returns {void}
   */
  closeImagePreview(): void {
    this.showImagePreview = false;
    // Restaurar scroll del body
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
}

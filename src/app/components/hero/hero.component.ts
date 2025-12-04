import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvViewerComponent } from '../cv-viewer/cv-viewer.component';

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
 * - Foto de perfil clickeable:
 *   • Imagen responsiva con lazy loading
 *   • Overlay con icono de zoom en hover
 *   • Abre modal fullscreen al hacer clic
 * - Modal de vista previa de imagen:
 *   • Imagen ampliada con backdrop blur
 *   • Botón cerrar con animación suave
 *   • Cierra al presionar ESC o clic fuera
 * - Visor de CV integrado (CvViewerComponent)
 * - Animaciones suaves: hover effects, transiciones
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA roles, keyboard navigation
 * 
 * ESTRUCTURA DE DATOS:
 * - showCv: boolean - controla visibilidad del visor de CV
 * - cvSrc: string - ruta al archivo PDF del CV
 * - showImagePreview: boolean - controla visibilidad del modal de imagen
 * 
 * ESTILOS Y ANIMACIONES:
 * - Gradientes: Título con gradient de acento1→acento2
 * - Hover: Imagen elevación -8px, sombra expandida
 * - Overlay: Opacidad 0→1, icono con animación pulse
 * - Transiciones: 280ms cubic-bezier(0.2, 0.9, 0.3, 1)
 * - Responsive: Row (desktop) → Column (mobile)
 * 
 * ACCESIBILIDAD:
 * - role="banner" en sección principal
 * - role="button" en imagen clickeable con tabindex
 * - aria-label en botones e imagen
 * - role="toolbar" en grupo de acciones
 * - role="dialog" en modal de imagen
 * - Soporta navegación con Enter y Space en imagen
 * - Focus-visible en botones y controles
 * 
 * RESPONSIVE DESIGN:
 * - Desktop (>768px): Layout horizontal (row)
 * - Tablet (768px-480px): Ajustes de espaciado
 * - Mobile (<480px): Layout vertical (column), botones fullwidth
 * - Imagen redimensionada para cada breakpoint
 * 
 * TEMA LIGHT:
 * - Overlay gradient más claro
 * - Botones con colores ajustados
 * - Mayor contraste en texto
 * 
 * EJEMPLOS DE USO:
 * <app-hero></app-hero>
 * 
 * MÉTODOS PÚBLICOS:
 * - toggleCv(): Alterna visibilidad del visor de CV
 * - openImagePreview(): Abre modal de vista previa de imagen
 * - closeImagePreview(): Cierra modal de vista previa
 * 
 * MEJORAS FUTURAS:
 * - Agregar descarga de foto en alta resolución
 * - Integrar social media links (GitHub, LinkedIn, Twitter)
 * - Animaciones on-scroll (AOS)
 * - Cargar datos desde servicio (HeroService)
 * - Soporte para múltiples idiomas (i18n)
 * - Integrar redes sociales con QR code
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, CvViewerComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  /**
   * Controla la visibilidad del visor de CV
   * @type {boolean}
   */
  showCv = false;

  /**
   * Ruta al archivo PDF del CV
   * @type {string}
   */
  cvSrc = 'Hoja de vida - Juan Pablo Rodriguez Tapiero.pdf';

  /**
   * Controla la visibilidad del modal de vista previa de imagen
   * @type {boolean}
   */
  showImagePreview = false;

  /**
   * Constructor del componente
   * Inicializa propiedades y prepara el componente para rendering
   */
  constructor() {}

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

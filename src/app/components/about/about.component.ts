import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
 * - Descripción ejecutiva del perfil profesional
 * - Tres tarjetas interactivas con categorías:
 *   • Habilidades Técnicas: QA, Lenguajes, Frameworks
 *   • Herramientas & DevOps: Contenedores, CI/CD, Observabilidad
 *   • Especialidades: Testing, Full Stack, Calidad
 * - Iconos emoji para identificación visual rápida
 * - Grid responsivo que adapta columnas dinámicamente
 * - Tarjetas con hover effects animados y sombras
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA labels, roles semánticos, focus states
 * 
 * ESTRUCTURA:
 * - Encabezado: Título con gradient + subtítulo
 * - Párrafo introductorio: Descripciones con palabras clave en bold
 * - Grid: Sistema auto-fit con minmax(280px, 1fr)
 * - Cards: Flex column con icono, título y lista de elementos
 * 
 * ESTILOS Y ANIMACIONES:
 * - Gradientes: Títulos con gradient de acento1→acento2
 * - Hover: Traslación -6px, sombra expandida, borde destaca
 * - Iconos: Contenedores circulares con scale 1.15 + rotate -5deg en hover
 * - Transiciones: 280ms cubic-bezier(0.2, 0.9, 0.3, 1)
 * - Responsive: 3 columnas (desktop) → 2 (tablet) → 1 (mobile)
 * 
 * ACCESIBILIDAD:
 * - role=\"region\" en sección principal
 * - role=\"list\" en grid de tarjetas
 * - role=\"listitem\" en cada tarjeta
 * - aria-labelledby vinculando títulos
 * - aria-hidden en iconos emoji (decorativos)
 * - focus-visible para navegación por teclado
 * - Suficiente contraste de colores en ambos temas
 * - Semántica HTML5: section, article, header, strong
 * 
 * RESPONSIVE DESIGN:
 * - Desktop (>768px): 3 columnas automáticas (minmax 280px)
 * - Tablet (768px-480px): 2 columnas fijas
 * - Mobile (<480px): 1 columna
 * - Ajustes de tamaño de fuente y espaciado
 * 
 * TEMA LIGHT:
 * - Iconos: Fondo más claro, borde ajustado
 * - Gradiente en hover: Más sutil para mejor legibilidad
 * - Listas: Opacidad aumentada para contraste
 * 
 * EJEMPLOS DE USO:
 * <app-about></app-about>
 * 
 * MEJORAS FUTURAS:
 * - Cargar información desde servicio (AboutService)
 * - Agregar más categorías dinámicamente
 * - Integrar animaciones on-scroll
 * - Agregar descargas de CV/resume
 * - Expandir tarjetas en modal/expandible
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /**
   * Constructor del componente
   * Inicializa propiedades y prepara el componente para rendering
   */
  constructor() {}
}

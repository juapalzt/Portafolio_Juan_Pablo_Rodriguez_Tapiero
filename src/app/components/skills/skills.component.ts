import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================================
 * COMPONENTE: SkillsComponent (Habilidades Técnicas)
 * ========================================================
 * 
 * RESPONSABILIDAD:
 * Mostrar las habilidades y tecnologías del desarrollador
 * organizadas en categorías interactivas con diseño moderno.
 * 
 * CARACTERÍSTICAS PRINCIPALES:
 * - Grid responsivo que adapta columnas dinámicamente (auto-fit, minmax)
 * - Cuatro categorías de habilidades:
 *   • QA Automation: herramientas de prueba automatizada
 *   • Lenguajes: Java, JavaScript, Python, Swift
 *   • Frameworks: Angular, Spring, Node.js
 *   • Otros: Docker, Git, CI/CD
 * - Tarjetas interactivas con hover effects animados
 * - Iconos emoji para identificación visual rápida
 * - Badges/tags descriptivos bajo cada categoría
 * - Animaciones suaves con transiciones cubic-bezier
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA labels, roles semánticos, focus states
 * 
 * ESTRUCTURA DE DATOS:
 * Las habilidades están hardcodeadas en el template HTML
 * No requiere servicio externo de datos.
 * 
 * ESTILOS Y ANIMACIONES:
 * - Gradientes: titulo con gradient de acento1→acento2
 * - Hover: traslación -6px, sombra expandida, borde destaca
 * - Iconos: escala 1.15 y rotación -5deg en hover
 * - Transiciones: 280ms cubic-bezier(0.2, 0.9, 0.3, 1)
 * - Responsive: 4 columnas (desktop) → 2 (tablet) → 1 (mobile)
 * 
 * ACCESIBILIDAD:
 * - role="region" en sección principal
 * - role="list" en grid de categorías
 * - role="listitem" en cada categoría
 * - aria-labelledby vinculando títulos
 * - aria-label en listas de tags
 * - aria-hidden en iconos emoji (decorativos)
 * - focus-visible para navegación por teclado
 * - Suficiente contraste de colores en ambos temas
 * 
 * RESPONSIVE DESIGN:
 * - Desktop (>768px): 4 columnas automáticas (minmax 200px)
 * - Tablet (768px-480px): 2 columnas fijas
 * - Mobile (<480px): 1 columna, tags en flex-column
 * 
 * TEMA LIGHT:
 * - Icono container: fondo más claro, borde ajustado
 * - Tags: colores más oscuros para legibilidad en fondo claro
 * - Gradientes sutiles sin afectar contraste
 * 
 * EJEMPLOS DE USO:
 * <app-skills></app-skills>
 * 
 * MEJORAS FUTURAS:
 * - Cargar habilidades desde servicio (SkillsService)
 * - Agregar niveles de proficiencia (beginner, intermediate, expert)
 * - Implementar filtrado por categoría
 * - Agregar estadísticas de uso (años de experiencia, proyectos)
 * - Integrar animaciones on-scroll (AOS)
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  /**
   * Constructor del componente
   * Inicializa propiedades y prepara el componente para rendering
   */
  constructor() {}
}

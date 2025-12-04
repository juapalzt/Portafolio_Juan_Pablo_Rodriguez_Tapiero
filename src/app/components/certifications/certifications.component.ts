import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ========================================================
 * COMPONENTE: CertificationsComponent (Certificaciones)
 * ========================================================
 * 
 * RESPONSABILIDAD:
 * Mostrar las certificaciones y credenciales profesionales
 * del desarrollador organizadas en tarjetas interactivas
 * con diseño moderno similar al componente Skills.
 * 
 * CARACTERÍSTICAS PRINCIPALES:
 * - Grid responsivo que adapta columnas dinámicamente (auto-fit, minmax)
 * - Cuatro certificaciones de ejemplo:
 *   • Postman API Fundamentals (📬) - Testing de APIs REST
 *   • Angular Fundamentals (⚡) - Desarrollo frontend
 *   • Java Professional Developer (☕) - Programación backend
 *   • Selenium WebDriver Expert (🧪) - Automatización QA
 * - Tarjetas interactivas con hover effects animados
 * - Iconos emoji para identificación visual rápida
 * - Badges/tags descriptivos bajo cada certificación
 * - Animaciones suaves con transiciones cubic-bezier
 * - Soporte completo para temas oscuro y claro
 * - Accesibilidad completa: ARIA labels, roles semánticos, focus states
 * 
 * ESTRUCTURA DE DATOS:
 * Las certificaciones están hardcodeadas en el template HTML
 * No requiere servicio externo de datos. En futuro, podría
 * conectarse a un servicio CertificationsService.
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
 * - role="list" en grid de certificaciones
 * - role="listitem" en cada certificación
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
 * <app-certifications></app-certifications>
 * 
 * MEJORAS FUTURAS:
 * - Cargar certificaciones desde servicio (CertificationsService)
 * - Agregar fechas de emisión y fechas de vencimiento
 * - Implementar enlaces a verificación de credenciales
 * - Agregar iconos SVG personalizados en lugar de emojis
 * - Integrar animaciones on-scroll (AOS)
 * - Agregar categorización por tipo (profesional, académica, online)
 */
@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  /**
   * Constructor del componente
   * Inicializa propiedades y prepara el componente para rendering
   */
  constructor() {}
}

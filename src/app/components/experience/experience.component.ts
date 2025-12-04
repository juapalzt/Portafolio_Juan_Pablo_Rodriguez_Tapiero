import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente: ExperienceComponent
 * 
 * Responsabilidad:
 * Mostrar el historial laboral del usuario en un timeline visual moderno.
 * 
 * Características:
 * - Timeline vertical con indicadores visuales (círculos)
 * - Línea conectora decorativa (gradiente diagonal)
 * - Cards con información de empresa, cargo, duración y responsabilidades
 * - Efectos hover: elevación de tarjeta, escala del marcador
 * - Soporta tema oscuro y claro con variables CSS
 * - Completamente responsivo: desktop → tablet → mobile
 * - Accesibilidad completa: ARIA labels, semantic HTML, focus-visible
 * - Sin lógica: datos se pasan via plantilla o input (actualmente hardcoded)
 * 
 * Estructura de datos esperada:
 * Cada experiencia tiene:
 *   - company: string (nombre de empresa)
 *   - role: string (puesto/cargo)
 *   - duration: string (ej: "2022 - Presente")
 *   - description: string (descripción del rol)
 *   - tasks: string[] (lista de responsabilidades/logros)
 * 
 * Estilos asociados:
 * - experience.component.scss: contiene toda la presentación visual
 * - Usa variables de tema globales: --accent, --accent-2, --text-color, --muted, --card
 * 
 * Ejemplo de uso:
 * <app-experience></app-experience>
 */
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  /**
   * Constructor
   * Actualmente vacío; los datos de experiencia están en la plantilla HTML.
   * En el futuro, se pueden cargar desde un servicio o input.
   */
  constructor() {}
}

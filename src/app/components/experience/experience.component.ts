import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../config/personal-data.config';

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
 * - Datos centralizados desde personal-data.config.ts
 * 
 * Estructura de datos:
 * Cada experiencia tiene:
 *   - company: string (nombre de empresa)
 *   - position: string (puesto/cargo)
 *   - startDate: string (fecha inicio)
 *   - endDate: string (fecha fin)
 *   - responsibilities: string[] (lista de responsabilidades/logros)
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
  personalData = PERSONAL_DATA;

  /**
   * Constructor
   */
  constructor() {}
}

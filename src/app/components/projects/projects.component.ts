import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

/**
 * Componente: ProjectsComponent
 * 
 * Responsabilidad:
 * Mostrar galería de proyectos destacados en un grid responsivo e interactivo.
 * 
 * Características:
 * - Grid auto-adaptable: 3 columnas (desktop) → 2 (tablet) → 1 (móvil)
 * - Tarjetas con imagen, overlay gradiente y animaciones suaves
 * - Badges de tecnologías para identificar el stack técnico
 * - Efecto hover: zoom de imagen + elevación de tarjeta
 * - Lazy loading de imágenes (loading=\"lazy\")
 * - Enlace a repositorio con ícono animado
 * - Soporta tema oscuro y claro con variables CSS
 * - Accesibilidad completa: ARIA labels, semantic HTML, keyboard navigation
 * 
 * Estructura esperada de datos (Project):
 * {
 *   title: string           // Nombre del proyecto
 *   image: string           // URL de imagen captura/thumbnail
 *   description: string     // Descripción breve
 *   technologies: string[]  // Stack técnico usado
 *   repo: string            // URL del repositorio (GitHub)
 * }
 * 
 * Fuente de datos:
 * Los datos de proyectos provienen de `ProjectsService.sample()` que retorna
 * un array de ejemplos. En producción, se puede reemplazar con llamadas HTTP.
 * 
 * Ejemplo de uso:
 * <app-projects></app-projects>
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /**
   * projects: Proyectos[] 
   * 
   * Lista de proyectos a mostrar en la galería.
   * Actualmente obtiene datos de muestra desde `ProjectsService.sample()`.
   * 
   * En futuras versiones, se puede:
   * - Inyectar ProjectsService y hacer llamadas HTTP asincrónicas
   * - Agregar paginación o filtrado por tecnología
   * - Cargar desde una API REST o GraphQL
   */
  projects = ProjectsService.sample();
}

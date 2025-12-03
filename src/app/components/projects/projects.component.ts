import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /**
   * Lista de proyectos a mostrar en la sección 'Proyectos'.
   * Actualmente proviene de `ProjectsService.sample()` para datos de ejemplo.
   */
  projects = ProjectsService.sample();
}

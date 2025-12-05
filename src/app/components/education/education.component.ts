import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../config/personal-data.config';

/**
 * ========================================
 * Componente: EducationComponent
 * 
 * Propósito: Mostrar formación académica
 * del portafolio de forma estructurada.
 * 
 * Características:
 * - Lista de programas académicos
 * - Fechas y estados (Egresado, Cursando)
 * - Instituciones
 * - Responsive
 * ========================================
 */
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  personalData = PERSONAL_DATA;

  get education() {
    return this.personalData.education;
  }
}

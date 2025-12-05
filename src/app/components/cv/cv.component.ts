import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA, PersonalDataHelper } from '../../config/personal-data.config';

/**
 * ========================================
 * Componente: CVComponent
 * 
 * Propósito: Mostrar educación, experiencia laboral y referencias
 * del portafolio de forma estructurada y visual.
 * 
 * Características:
 * - Educación: lista de programas académicos con fechas
 * - Experiencia: empresa, posición, fechas y responsabilidades
 * - Referencias: contactos profesionales y personales
 * - Accesibilidad: ARIA labels y estructura semántica
 * - Responsive: adapta a móviles
 * ========================================
 */
@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent {
  // Datos centralizados
  personalData = PERSONAL_DATA;
  dataHelper = PersonalDataHelper;

  /**
   * Calcula años de experiencia total
   */
  get yearsOfExperience(): number {
    return this.dataHelper.getWorkExperienceYears();
  }

  /**
   * Obtiene experiencia laboral
   */
  get workExperience() {
    return this.personalData.workExperience;
  }

  /**
   * Obtiene educación
   */
  get education() {
    return this.personalData.education;
  }

  /**
   * Obtiene referencias
   */
  get references() {
    return this.personalData.references;
  }

  /**
   * Obtiene habilidades técnicas por categoría
   */
  get technicalSkills() {
    return this.personalData.technicalSkills;
  }
}

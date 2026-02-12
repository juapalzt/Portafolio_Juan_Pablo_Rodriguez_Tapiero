import { PERSONAL_DATA } from '../config/personal-data.config';

/**
 * Servicio sencillo para proyectos. Provee datos de ejemplo (método `sample`).
 * En una implementación real estos datos vendrían de un archivo JSON o una API.
 * 
 * Nota: Los URLs de repositorios se generan dinámicamente usando el username de GitHub
 * desde la configuración centralizada, facilitando actualizaciones futuras.
 */
export class ProjectsService {
  /**
   * Retorna una lista de proyectos de ejemplo.
   * Útil para desarrollo y vistas de demostración.
   * 
   * Los URLs se construyen dinámicamente usando PERSONAL_DATA.socialLinks.github.username
   * para centralizar la gestión del nombre de usuario de GitHub.
   */
  static sample() {
    const githubUser = PERSONAL_DATA.socialLinks.github.username;
    
    return [
      {
        title: 'Automation Suite - E2E',
        description: 'Framework de pruebas E2E con Selenium e integración CI.',
        technologies: ['Selenium', 'Java', 'GitHub Actions'],
        repo: `https://github.com/${githubUser}/automation-suite`,
        image: '/assets/img/github.png'
      },
      {
        title: 'Angular Portfolio',
        description: 'Portafolio moderno construido con Angular y SCSS.',
        technologies: ['Angular', 'SCSS', 'Vercel'],
        repo: `https://github.com/${githubUser}/mi-portafolio`,
        image: '/assets/img/Foto.jpg'
      }
    ];
  }
}

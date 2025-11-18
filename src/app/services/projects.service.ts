export class ProjectsService {
  static sample() {
    return [
      {
        title: 'Automation Suite - E2E',
        description: 'Framework de pruebas E2E con Selenium y integración CI.',
        technologies: ['Selenium', 'Java', 'GitHub Actions'],
        repo: 'https://github.com/juapalzt/automation-suite',
        image: '/assets/img/project-1.svg'
      },
      {
        title: 'Angular Portfolio',
        description: 'Portafolio moderno construido con Angular y SCSS.',
        technologies: ['Angular', 'SCSS', 'Vercel'],
        repo: 'https://github.com/juapalzt/mi-portafolio',
        image: '/assets/img/project-2.svg'
      }
    ];
  }
}

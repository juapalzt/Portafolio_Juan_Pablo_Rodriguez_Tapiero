import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { EducationComponent } from '../../components/education/education.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, CertificationsComponent, EducationComponent, ContactComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  showScrollToTop = false;

  /**
   * Listener para detectar scroll y mostrar/ocultar botón "Scroll to Top"
   * Se activa cuando el usuario hace scroll más de 200px hacia abajo
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = typeof window !== 'undefined' ? window.pageYOffset || document.documentElement.scrollTop : 0;
    this.showScrollToTop = scrollTop > 200;
  }

  /**
   * Desplazamiento suave hacia el inicio de la página
   */
  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

// Página principal que agrupa las secciones del portafolio:
// Hero, About, Experience, Projects, Skills, Certifications y Contact.

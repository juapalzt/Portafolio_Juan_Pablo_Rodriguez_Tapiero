import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, CertificationsComponent, ContactComponent],
  templateUrl: './home.page.html'
})
export class HomePage {}

// Página principal que agrupa las secciones del portafolio:
// Hero, About, Experience, Projects, Skills, Certifications y Contact.

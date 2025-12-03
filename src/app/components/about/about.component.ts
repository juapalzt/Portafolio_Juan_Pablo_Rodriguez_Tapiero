import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
// Componente 'Sobre mí'.
// La plantilla contiene la biografía y elementos visuales; este componente
// se mantiene ligero y sirve como punto de anclaje para la sección 'about'.

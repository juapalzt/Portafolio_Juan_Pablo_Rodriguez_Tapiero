import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**
   * Año dinámico mostrado en el pie de página.
   * Se calcula en tiempo de ejecución para mantener el copyright actualizado.
   */
  year = new Date().getFullYear();
}

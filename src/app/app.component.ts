import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi-portafolio';
  loading = false;
  /**
   * Componente raíz de la aplicación.
   * - `title`: nombre del proyecto
   * - `loading`: indicador global de carga (puede vincularse a un loader)
   *
   * La traducción se gestiona automáticamente mediante Google Translate.
   */
  constructor() {}

  /**
   * Inicialización del componente raíz.
   */
  ngOnInit(): void {
    // Inicialización completada
  }
}

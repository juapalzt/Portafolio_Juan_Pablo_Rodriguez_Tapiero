import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './i18n/translate-loader.factory';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent, HttpClientModule, TranslateModule],
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
   * Este componente inicializa el servicio de idioma al arrancar la app.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Inicialización del componente raíz.
   * Intenta inicializar la configuración de idioma mediante `LanguageService`.
   * Se envuelve en try/catch porque la inicialización puede fallar en entornos
   * donde `window`/`localStorage` no esté disponible (SSR).
   */
  ngOnInit(): void {
    try {
      this.languageService.initLanguage();
    } catch {
      // Ignorar errores en la inicialización de idioma (fallback silencioso)
    }
  }
}

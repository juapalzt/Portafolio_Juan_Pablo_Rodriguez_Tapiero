import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  language: 'es' | 'en' = 'es';

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}
  /**
   * Inicializa la configuración de idioma para la aplicación.
   * - Detecta el idioma del navegador y asigna 'es' o 'en'.
   * - Registra los idiomas disponibles en TranslateService y establece el idioma por defecto.
   * - Actualiza la URL (sin navegar) usando Location para reflejar el idioma.
   */
  initLanguage(){
    this.translateService.addLangs(['en', 'es']);
    let language = (typeof navigator !== 'undefined' ? (navigator.language || (navigator as any).userLanguage) : 'es') as string;
    language = language.split('-').includes('es') ? 'es' : 'en';
    this.translateService.setDefaultLang(language);

    // Change the URL without navigate:
    try { this.location.go(language); } catch {}

    this.language = language as 'es' | 'en';
  }

  /**
   * Cambia el idioma activo.
   * - Solicita a TranslateService que use el idioma indicado.
   * - Actualiza la URL para reflejar el idioma.
   */
  changeLanguage(language: 'es'|'en'){
    this.translateService.use(language);
    try { this.location.go(language); } catch {}
    this.language = language;
  }
}

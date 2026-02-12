import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language: 'es' | 'en' = 'es';

  /**
   * Servicio de idiomas - DEPRECADO
   * La traducción se gestiona ahora a través de Google Translate
   */
}

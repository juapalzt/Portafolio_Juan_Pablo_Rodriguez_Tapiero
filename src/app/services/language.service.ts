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

  initLanguage(){
    this.translateService.addLangs(['en', 'es']);
    let language = (typeof navigator !== 'undefined' ? (navigator.language || (navigator as any).userLanguage) : 'es') as string;
    language = language.split('-').includes('es') ? 'es' : 'en';
    this.translateService.setDefaultLang(language);

    // Change the URL without navigate:
    try { this.location.go(language); } catch {}

    this.language = language as 'es' | 'en';
  }

  changeLanguage(language: 'es'|'en'){
    this.translateService.use(language);
    try { this.location.go(language); } catch {}
    this.language = language;
  }
}

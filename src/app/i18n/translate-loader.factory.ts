import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// AoT requiere una función exportada para las fábricas
// Cree un pequeño TranslateLoader que obtenga archivos JSON de assets/i18n
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string): Observable<any> => http.get(`/assets/i18n/${lang}.json`)
  } as TranslateLoader;
}

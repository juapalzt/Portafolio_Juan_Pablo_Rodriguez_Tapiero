import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// AoT requires an exported function for factories
// Create a small TranslateLoader that fetches JSON files from assets/i18n
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string): Observable<any> => http.get(`/assets/i18n/${lang}.json`)
  } as TranslateLoader;
}

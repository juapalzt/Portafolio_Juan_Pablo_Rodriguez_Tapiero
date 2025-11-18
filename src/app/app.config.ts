import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './i18n/translate-loader.factory';
import { HttpClient } from '@angular/common/http';

// Configure TranslateModule.forRoot's providers at application bootstrap
const translateModuleWithProviders = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    ...(translateModuleWithProviders.providers ?? [])
  ]
};

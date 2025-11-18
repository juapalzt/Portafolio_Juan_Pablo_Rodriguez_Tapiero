import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

class MockTranslate {
  addLangs(_: string[]) {}
  setDefaultLang(_: string) {}
  use(_: string) {}
}

class MockLocation { go(_: string) {}
}

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useClass: MockTranslate },
        { provide: Location, useClass: MockLocation }
      ]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

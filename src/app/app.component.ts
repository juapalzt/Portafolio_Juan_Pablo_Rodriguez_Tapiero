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

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    try { this.languageService.initLanguage(); } catch { /* ignore */ }
  }
}

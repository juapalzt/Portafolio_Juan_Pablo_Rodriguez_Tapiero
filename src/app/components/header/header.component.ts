import { Component, Inject, OnInit, HostBinding, HostListener } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDark = true;
  mobileMenuOpen = false;
  // Debug UI state
  devToggleVisible = false;
  @HostBinding('class.debug') debug = false;

  constructor(@Inject(DOCUMENT) private document: Document, private languageService: LanguageService) {}

  ngOnInit(): void {
    const isBrowser = typeof window !== 'undefined' && !!(this.document && this.document.defaultView);
    let saved: string | null = null;
    if (isBrowser) {
      try {
        saved = window.localStorage ? window.localStorage.getItem('theme') : null;
      } catch {
        saved = null;
      }
    }

    this.isDark = saved ? saved === 'dark' : true;
    if (isBrowser) {
      this.applyTheme(this.isDark ? 'dark' : 'light');
    }

    // Read dev toggle visibility & debug state from localStorage
    try {
      const showBtn = isBrowser && window.localStorage ? window.localStorage.getItem('devToggleVisible') : null;
      const dbg = isBrowser && window.localStorage ? window.localStorage.getItem('debugOn') : null;
      this.devToggleVisible = showBtn === '1';
      this.debug = dbg === '1';
    } catch {
      this.devToggleVisible = false;
      this.debug = false;
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const t = this.isDark ? 'dark' : 'light';
    if (typeof window !== 'undefined' && window.localStorage) {
      try { localStorage.setItem('theme', t); } catch { /* ignore */ }
    }
    if (typeof window !== 'undefined') {
      this.applyTheme(t);
    }
  }

  // Mobile menu controls
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  // Dev helpers
  toggleDebug() {
    this.debug = !this.debug;
    try { if (typeof window !== 'undefined' && window.localStorage) { window.localStorage.setItem('debugOn', this.debug ? '1' : '0'); } } catch {}
  }

  toggleDevButtonVisibility() {
    this.devToggleVisible = !this.devToggleVisible;
    try { if (typeof window !== 'undefined' && window.localStorage) { window.localStorage.setItem('devToggleVisible', this.devToggleVisible ? '1' : '0'); } } catch {}
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(ev: KeyboardEvent) {
    // Ctrl+D to toggle visibility of the debug button
    if (ev.ctrlKey && (ev.key === 'd' || ev.key === 'D')) {
      ev.preventDefault();
      this.toggleDevButtonVisibility();
    }
  }

  // Language helpers
  get currentLanguage() { return this.languageService?.language || 'es'; }

  setLanguage(lang: 'es'|'en') {
    try { this.languageService.changeLanguage(lang); } catch { /* ignore */ }
  }

  private applyTheme(theme: 'dark'|'light') {
    const docEl = this.document.documentElement;

    if (theme === 'light') {
      docEl.classList.remove('theme-dark');
      docEl.classList.add('theme-light');

      // set a small set of CSS vars for the light theme while keeping --accent
      docEl.style.setProperty('--bg', '#f6f8fb');
      docEl.style.setProperty('--card', '#ffffff');
      docEl.style.setProperty('--muted', '#6b7280');
      const currentAccent = getComputedStyle(docEl).getPropertyValue('--accent') || '#0f6fbf';
      docEl.style.setProperty('--accent', currentAccent);
      docEl.style.setProperty('--accent-2', '#d95f5f');
    } else {
      docEl.classList.remove('theme-light');
      docEl.classList.add('theme-dark');

      // restore dark variables
      docEl.style.setProperty('--bg', '#0b1226');
      docEl.style.setProperty('--card', '#0f1724');
      docEl.style.setProperty('--muted', '#9aa4b2');
      const currentAccent = getComputedStyle(docEl).getPropertyValue('--accent') || '#0f6fbf';
      docEl.style.setProperty('--accent', currentAccent);
      docEl.style.setProperty('--accent-2', '#d95f5f');
    }
  }
}

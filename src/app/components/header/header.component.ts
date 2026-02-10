import { Component, Inject, OnInit, HostBinding, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  isDark = true;
  mobileMenuOpen = false;
  actionsMenuOpen = false;
  showScrollToTop = false;
  @ViewChild('mobileMenuRef', { static: false }) mobileMenuRef?: ElementRef<HTMLElement>;
  @ViewChild('mobileBackdropRef', { static: false }) mobileBackdropRef?: ElementRef<HTMLElement>;

  // DOM nodes moved to document.body when menu opens to avoid stacking-context issues
  private _movedMenuEl?: HTMLElement;
  private _movedBackdropEl?: HTMLElement;
  // Debug UI state
  devToggleVisible = false;
  @HostBinding('class.debug') debug = false;

  /**
   * Componente de cabecera / navegación principal.
   * - Gestiona el tema (claro/oscuro) y su persistencia en localStorage.
   * - Controla el menú móvil (abrir/cerrar).
   * - Provee helpers de depuración (botón dev) para visualizar cajas en layout.
   */

  /**
   * @param document Inyectamos `DOCUMENT` para manipular las clases/variables CSS en el elemento raíz.
   * @param languageService Servicio de idiomas para inicializar/cambiar el idioma.
   */
  constructor(@Inject(DOCUMENT) private document: Document, private languageService: LanguageService) {}

  ngOnInit(): void {
    // Inicialización del componente: detectar tema guardado y aplicar variables.
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

    // Leer estado del botón de depuración y del flag debug desde localStorage
    try {
      const showBtn = isBrowser && window.localStorage ? window.localStorage.getItem('devToggleVisible') : null;
      const dbg = isBrowser && window.localStorage ? window.localStorage.getItem('debugOn') : null;
      this.devToggleVisible = showBtn === '1';
      this.debug = dbg === '1';

      // If the developer button has never been shown before, auto-show it briefly once
      const devSeen = isBrowser && window.localStorage ? window.localStorage.getItem('devSeenOnce') : null;
      if (!devSeen && showBtn === null) {
        // show for 4 seconds then hide, and mark as seen
        this.devToggleVisible = true;
        const AUTO_MS = 4000;
        try {
          window.setTimeout(() => {
            this.devToggleVisible = false;
            if (typeof window !== 'undefined' && window.localStorage) {
              try { window.localStorage.setItem('devSeenOnce', '1'); } catch {}
            }
          }, AUTO_MS);
        } catch {
          /* ignore */
        }
      }
    } catch {
      this.devToggleVisible = false;
      this.debug = false;
    }
  }

  toggleTheme() {
    // Cambia el estado de tema y lo persiste en localStorage.
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
    // Alterna la visibilidad del menú móvil
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // cerrar panel de acciones si está abierto
    if (this.mobileMenuOpen) { this.actionsMenuOpen = false; }

    // If opened, move elements to document.body so they are not clipped by parent stacking contexts
    if (this.mobileMenuOpen) {
      setTimeout(() => this._moveMobileMenuToBody(), 0);
    } else {
      // when closing, ensure moved nodes are removed from body
      this._removeMovedMobileNodes();
    }
  }

  // Panel de acciones secundarias (4 items)
  toggleActionsMenu() {
    this.actionsMenuOpen = !this.actionsMenuOpen;
    // cerrar menú principal si se abre el panel de acciones
    if (this.actionsMenuOpen) { this.mobileMenuOpen = false; }
  }

  closeActionsMenu() {
    this.actionsMenuOpen = false;
  }

  closeMobileMenu() {
    // Cierra el menú móvil
    this.mobileMenuOpen = false;
    this._removeMovedMobileNodes();
  }

  private _moveMobileMenuToBody() {
    try {
      // Prefer template refs if available
      const menu = this.mobileMenuRef?.nativeElement ?? this.document.getElementById('mobile-menu') as HTMLElement | null;
      const backdrop = this.mobileBackdropRef?.nativeElement ?? this.document.querySelector('.mobile-menu-backdrop') as HTMLElement | null;

      if (backdrop && backdrop.parentElement !== this.document.body) {
        this._movedBackdropEl = backdrop;
        this.document.body.appendChild(backdrop);
      }

      if (menu && menu.parentElement !== this.document.body) {
        this._movedMenuEl = menu;
        this.document.body.appendChild(menu);
      }
    } catch {
      // ignore DOM errors
    }
  }

  private _removeMovedMobileNodes() {
    try {
      if (this._movedMenuEl && this._movedMenuEl.parentElement === this.document.body) {
        this._movedMenuEl.remove();
        this._movedMenuEl = undefined;
      }
      if (this._movedBackdropEl && this._movedBackdropEl.parentElement === this.document.body) {
        this._movedBackdropEl.remove();
        this._movedBackdropEl = undefined;
      }
    } catch {}
  }

  // Dev helpers
  toggleDebug() {
    // Alterna la clase `debug` en el host para mostrar las guías visuales.
    this.debug = !this.debug;
    try { if (typeof window !== 'undefined' && window.localStorage) { window.localStorage.setItem('debugOn', this.debug ? '1' : '0'); } } catch {}
  }

  toggleDevButtonVisibility() {
    // Alterna la visibilidad del botón de depuración y persiste la preferencia.
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

  /**
   * Listener para detectar scroll y mostrar/ocultar botón "Scroll to Top"
   * Se activa cuando el usuario hace scroll más de 200px hacia abajo
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = typeof window !== 'undefined' ? window.pageYOffset || document.documentElement.scrollTop : 0;
    this.showScrollToTop = scrollTop > 200;
  }

  /**
   * Desplazamiento suave hacia el inicio de la página
   * Utiliza comportamiento smooth nativo del navegador
   */
  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  ngOnDestroy(): void {
    // cleanup moved nodes if component is destroyed
    this._removeMovedMobileNodes();
  }

  // Language helpers
  get currentLanguage() { return this.languageService?.language || 'es'; }

  setLanguage(lang: 'es'|'en') {
    // Cambia el idioma a través del servicio de idiomas.
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

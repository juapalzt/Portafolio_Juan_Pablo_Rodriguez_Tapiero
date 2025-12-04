import { Component, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.scss']
})
export class CvViewerComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) src!: string;
  safeSrc?: SafeResourceUrl;

  @ViewChild('iframeRef', { static: false }) iframeRef?: ElementRef<HTMLIFrameElement>;
  @ViewChild('containerRef', { static: false }) containerRef?: ElementRef<HTMLElement>;
  @ViewChild('backdropRef', { static: false }) backdropRef?: ElementRef<HTMLElement>;
  @Output() close = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Componente para mostrar el CV en un iframe seguro.
   * - `src`: URL o ruta local del PDF (entrada requerida).
   * - `safeSrc`: versión sanitizada para usar en `iframe`.
   * - Permite acciones: imprimir, fullscreen y cerrar (emitir evento `close`).
   */

  ngOnChanges(changes: SimpleChanges) {
    if (changes['src'] && this.src) {
      // sanitize only for browser usage; safe for SSR to have undefined
      try {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
      } catch {
        this.safeSrc = undefined;
      }
    }
  }

  ngAfterViewInit(): void {
    // Move the backdrop to document.body so the modal is outside any stacking context
    try {
      const el = this.backdropRef?.nativeElement;
      if (el && el.parentElement !== document.body) {
        document.body.appendChild(el);
      }
      // focus the modal container for accessibility
      setTimeout(() => {
        try { this.containerRef?.nativeElement?.focus(); } catch {}
      }, 0);
    } catch {}
  }

  ngOnDestroy(): void {
    // cleanup: remove element from body if still present
    try {
      const el = this.backdropRef?.nativeElement;
      if (el && el.parentElement === document.body) {
        el.remove();
      }
    } catch {}
  }

  print() {
    try {
      const frame = this.iframeRef?.nativeElement;
      frame?.contentWindow?.focus();
      frame?.contentWindow?.print();
    } catch {
      // fallback: open download prompt
      const a = document.createElement('a');
      a.href = this.src;
      a.download = '';
      a.click();
    }
  }

  async fullscreen() {
    try {
      // Prefer requesting fullscreen on the iframe (PDF viewer) so it occupies full screen
      const frame = this.iframeRef?.nativeElement;
      const el = frame ?? this.containerRef?.nativeElement;
      if (el) {
        const req: any = (el as any).requestFullscreen || (el as any).webkitRequestFullscreen || (el as any).mozRequestFullScreen || (el as any).msRequestFullscreen;
        if (req) {
          await req.call(el);
        }
      }
    } catch {
      // ignore fullscreen errors
    }
  }

  // optional: keep backdrop transparent when entering fullscreen on the modal
  @HostListener('document:fullscreenchange', [])
  onFullScreenChange() {
    try {
      const doc: any = document as any;
      const isFs = !!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement);
      const backdrop = this.backdropRef?.nativeElement;
      if (backdrop) {
        if (isFs) backdrop.classList.add('fullscreen-hidden'); else backdrop.classList.remove('fullscreen-hidden');
      }
    } catch {}
  }

  // Close modal and notify parent
  closeModal() {
    // remove backdrop from body immediately to avoid being obstructed
    try { const el = this.backdropRef?.nativeElement; if (el && el.parentElement === document.body) el.remove(); } catch {}
    this.close.emit();
  }

  // Close on Escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(evt: Event) {
    // `evt` is a generic Event when compiled depending on target; safe to close regardless
    try { (evt as Event).stopPropagation(); } catch {}
    this.closeModal();
  }
}

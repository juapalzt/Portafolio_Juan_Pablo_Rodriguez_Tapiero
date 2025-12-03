import { Component, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.scss']
})
export class CvViewerComponent {
  @Input({ required: true }) src!: string;
  safeSrc?: SafeResourceUrl;

  @ViewChild('iframeRef', { static: false }) iframeRef?: ElementRef<HTMLIFrameElement>;
  @ViewChild('containerRef', { static: false }) containerRef?: ElementRef<HTMLElement>;
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
      const el = this.containerRef?.nativeElement;
      if (el) {
        if ((el as any).requestFullscreen) await (el as any).requestFullscreen();
      }
    } catch {
      // ignore fullscreen errors
    }
  }

  // Close modal and notify parent
  closeModal() {
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

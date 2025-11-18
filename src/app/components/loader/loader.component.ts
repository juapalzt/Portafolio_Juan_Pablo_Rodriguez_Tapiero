import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="center" style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:2000">
      <div class="card center" style="width:160px;height:160px;border-radius:12px;flex-direction:column">
        <div class="muted">Cargando</div>
        <div style="width:48px;height:48px;border-radius:50%;border:4px solid rgba(255,255,255,0.08);border-top-color:var(--accent);animation:spin 1s linear infinite;margin-top:12px"></div>
      </div>
    </div>
  `,
  styles: [
    `@keyframes spin{to{transform:rotate(360deg)}}`
  ]
})
export class LoaderComponent {}

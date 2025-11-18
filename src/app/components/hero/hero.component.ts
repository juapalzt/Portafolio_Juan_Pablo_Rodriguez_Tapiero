import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvViewerComponent } from '../cv-viewer/cv-viewer.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, CvViewerComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  showCv = false;
  cvSrc = 'Hoja de vida - Juan Pablo Rodriguez Tapiero.pdf';

  toggleCv() {
    this.showCv = !this.showCv;
  }
}

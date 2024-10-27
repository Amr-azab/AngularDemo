import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent {
  workImages = [
    { imgUrl: '../../assets/images/portfolio/thumbnails/1.jpg', alt: '' },
    { imgUrl: '../../assets/images/portfolio/thumbnails/2.jpg', alt: '' },
    { imgUrl: '../../assets/images/portfolio/thumbnails/3.jpg', alt: '' },
    { imgUrl: '../../assets/images/portfolio/thumbnails/4.jpg', alt: '' },
    { imgUrl: '../../assets/images/portfolio/thumbnails/5.jpg', alt: '' },
    { imgUrl: '../../assets/images/portfolio/thumbnails/6.jpg', alt: '' },
  ];
}

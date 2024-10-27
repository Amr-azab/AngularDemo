import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  servicesData = [
    {
      iconClass: 'fas fa-gem fa-5x',
      heading: 'Sturdy Theme',
      description: 'Our Themes are updated requlary to keep them bug free!',
    },
    {
      iconClass: 'fas fa-laptop fa-5x',
      heading: 'Up To Date',
      description: 'Our Themes are updated requlary to keep them bug free!',
    },
    {
      iconClass: 'fas fa-globe fa-5x',
      heading: 'Ready tp Publish',
      description: 'Our Themes are updated requlary to keep them bug free!',
    },
    {
      iconClass: 'fas fa-heart fa-5x',
      heading: 'Made With Love',
      description: 'Our Themes are updated requlary to keep them bug free!',
    },
  ];
  exploreData = [
    {
      img: '../../assets/images/portfolio/thumbnails/1.jpg',
      title: 'Explore',
    },
    {
      img: '../../assets/images/portfolio/thumbnails/2.jpg',
      title: 'Experience',
    },
  ];
  constructor(public testService: TestService) {
    testService.sayWelcome('Explore Component');
  }
}

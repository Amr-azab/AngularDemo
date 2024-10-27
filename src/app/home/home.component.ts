import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // bta5od object mn al TestService
  constructor(private testService: TestService) {
    testService.sayWelcome('Home Component');
  }
}

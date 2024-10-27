import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css',
})
export class PagenotfoundComponent {
  constructor(public testService: TestService) {
    testService.sayWelcome('Page Not Found Component');
  }
}

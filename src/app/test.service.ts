import { Injectable } from '@angular/core';

// inject y3ny t2der tb3tha L ay componed anta 3ayzha
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  sayWelcome(component: string) {
    console.log(`Welcome from ${component}`);
  }
}

import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs'; // deh 3lshan lw ay ta5er fe ala data y3ml subscribe leh y3ny ystlm ay update L data

@Injectable({
  providedIn: 'root',
})
export class LetastnewsService {
  constructor() {}

  getUSANews(): Observable<any> {
    return new Observable((observer) => {
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c66a1f1ffb9941b183309e7e6e107bcc'
        )
        .then((response) => {
          observer.next(response.data); // Pass the data to the observer
          observer.complete(); // Mark the observable as complete
        })
        .catch((error) => {
          console.error('Error occurred:', error); // Log the error
          observer.error('Error fetching news'); // Pass the error to the observer
        });
    });
  }
}

import { Component } from '@angular/core';
import { LetastnewsService } from '../letastnews.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, RouterModule], // No need to import LetastnewsService here
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css',
})
export class LatestNewsComponent {
  news: any[] = [];

  constructor(public latestNews: LetastnewsService) {
    // deh 3lshan lw ay ta5er fe ala data y3ml subscribe leh y3ny ystlm ay update L data
    latestNews.getUSANews().subscribe({
      next: (data) => {
        this.news = data.articles; // Assuming 'articles' contains the news items
        console.log(this.news);
      },
      error: (err) => {
        console.error(err); // Handle the error
      },
    });
  }
}

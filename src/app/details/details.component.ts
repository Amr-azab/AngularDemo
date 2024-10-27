import { Component } from '@angular/core';
import { LetastnewsService } from '../letastnews.service';
import { ActivatedRoute } from '@angular/router'; // n2der na5od mnw object w n2dr nst5dm al property bt3tna 3lahsn get ngeb al id
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  private readonly id: string = '';
  // specificNew: any = {};
  specificNew: any;
  constructor(
    public activeRoute: ActivatedRoute,
    public news: LetastnewsService
  ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id') || '';
    this.news.getUSANews().subscribe((result) => {
      this.specificNew = result.articles[this.id];
    });
  }
}

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ExploreComponent } from './explore/explore.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  // localhost:4200/
  { path: '', component: HomeComponent },
  // localhost:4200/explore
  { path: 'explore', component: ExploreComponent },
  // localhost:4200/news
  { path: 'news', component: LatestNewsComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorksComponent },
  // { path: 'details', component: DetailsComponent },
  // : => y3ny paramter hate8er  y3ny dah url paramter
  { path: 'details/:id', component: DetailsComponent },
  // Wildcard component y3ny ay 7aga 8er ale fw2 dwl
  { path: '**', component: PagenotfoundComponent },
];

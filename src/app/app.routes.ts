import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Tickets } from './pages/tickets/tickets';
import { About } from './pages/about/about';
import { Cities } from './pages/cities/cities';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'profile', component: Profile },
  { path: 'tickets', component: Tickets },
  { path: 'about', component: About },
  { path: 'cities', component: Cities }
];

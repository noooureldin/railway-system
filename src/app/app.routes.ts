import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { TrainTypes } from './pages/train-types/train-types';
import { Cities } from './pages/cities/cities';
import { About } from './pages/about/about';
import { MyTickets } from './pages/my-tickets/my-tickets';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'profile',
    component: Profile
  },

  {
    path: 'train-types',
    component: TrainTypes
  },

  {
    path: 'cities',
    component: Cities
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'my-tickets',
    component: MyTickets
  },



  {
    path: '**',
    redirectTo: ''
  }

];
import { Component, signal } from '@angular/core';

interface TrainType {
  name: string;
  countries: string;
  speed: string;
  description: string;
  icon: string;
  officialWebsite: string;
}

interface PassOption {
  name: string;
  bestFor: string;
  detail: string;
  website: string;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css'
})
export class Tickets {
  selectedClass = signal<'1st' | '2nd' | '3rd'>('2nd');

  readonly trainTypes: TrainType[] = [
    {
      name: 'TGV inOui',
      countries: 'France, Spain, Germany, Italy, Switzerland',
      speed: 'up to 320 km/h',
      description: 'France\'s flagship high-speed network connecting Paris with Lyon, Marseille, Bordeaux, and neighbouring countries.',
      icon: '🚄',
      officialWebsite: 'https://www.sncf-connect.com'
    },
    {
      name: 'ICE (InterCity-Express)',
      countries: 'Germany, Austria, Belgium, Netherlands, Switzerland',
      speed: 'up to 300 km/h',
      description: 'Germany\'s premium high-speed network linking Berlin, Munich, Frankfurt, Cologne, and international hubs.',
      icon: '🚆',
      officialWebsite: 'https://www.bahn.com'
    },
    {
      name: 'Eurostar',
      countries: 'UK, France, Belgium, Netherlands, Germany',
      speed: 'up to 300 km/h',
      description: 'The cross-Channel express connecting London directly to Paris, Brussels, Rotterdam, and Amsterdam.',
      icon: '🚇',
      officialWebsite: 'https://www.eurostar.com'
    },
    {
      name: 'Frecciarossa',
      countries: 'Italy, France, Spain',
      speed: 'up to 300 km/h',
      description: 'Trenitalia\'s high-speed flagship linking Milan, Florence, Rome, Naples, and Paris.',
      icon: '🔴',
      officialWebsite: 'https://www.trenitalia.com'
    },
    {
      name: 'AVE (Alta Velocidad Española)',
      countries: 'Spain, France',
      speed: 'up to 310 km/h',
      description: 'Spain\'s premier long-distance high-speed railway connecting Madrid, Barcelona, Seville, and Valencia.',
      icon: '🚅',
      officialWebsite: 'https://www.renfe.com'
    },
    {
      name: 'Nightjet',
      countries: 'Austria, Germany, Italy, Switzerland, Netherlands, France',
      speed: 'Overnight sleeper',
      description: 'Comfortable sleeper network featuring private cabins, couchettes, and reclining seats to travel while sleeping.',
      icon: '🌙',
      officialWebsite: 'https://www.nightjet.com'
    }
  ];

  readonly passes: PassOption[] = [
    {
      name: 'Eurail Pass',
      bestFor: 'Non-EU Residents',
      detail: 'Flexible travel days across up to 33 European countries.',
      website: 'https://www.eurail.com'
    },
    {
      name: 'Interrail Pass',
      bestFor: 'EU Residents',
      detail: 'Comprehensive European rail pass for residents of European nations.',
      website: 'https://www.interrail.eu'
    }
  ];

  setClass(cls: '1st' | '2nd' | '3rd'): void {
    this.selectedClass.set(cls);
  }
}
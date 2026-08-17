import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Capital {
  name: string;
  country: string;
  imageUrl: string;
  infoUrl: string;
}

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.html',
  styleUrl: './cities.css'
})
export class Cities {
  readonly fallbackImage = 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80';

  readonly capitals: Capital[] = [
    { name: 'Paris', country: 'France', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Paris' },
    { name: 'London', country: 'United Kingdom', imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/London' },
    { name: 'Rome', country: 'Italy', imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Rome' },
    { name: 'Madrid', country: 'Spain', imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Madrid' },
    { name: 'Berlin', country: 'Germany', imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Berlin' },
    { name: 'Amsterdam', country: 'Netherlands', imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Amsterdam' },
    { name: 'Vienna', country: 'Austria', imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Vienna' },
    { name: 'Brussels', country: 'Belgium', imageUrl: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Brussels' },
    { name: 'Lisbon', country: 'Portugal', imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Lisbon' },
    { name: 'Prague', country: 'Czech Republic', imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Prague' },
    { name: 'Budapest', country: 'Hungary', imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Budapest' },
    { name: 'Warsaw', country: 'Poland', imageUrl: 'https://images.unsplash.com/photo-1519197924294-4ac991a115fe?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Warsaw' },
    { name: 'Athens', country: 'Greece', imageUrl: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Athens' },
    { name: 'Copenhagen', country: 'Denmark', imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Copenhagen' },
    { name: 'Stockholm', country: 'Sweden', imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Stockholm' },
    { name: 'Oslo', country: 'Norway', imageUrl: 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Oslo' },
    { name: 'Dublin', country: 'Ireland', imageUrl: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Dublin' },
    { name: 'Bern', country: 'Switzerland', imageUrl: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Bern' },
    { name: 'Zagreb', country: 'Croatia', imageUrl: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Zagreb' },
    { name: 'Bucharest', country: 'Romania', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', infoUrl: 'https://en.wikivoyage.org/wiki/Bucharest' }
  ];

  handleImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = this.fallbackImage;
  }
}
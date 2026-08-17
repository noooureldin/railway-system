import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly navItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Profile', path: '/profile', icon: '👤' },
    { label: 'Train Types', path: '/tickets', icon: '🎫' },
    { label: 'Cities', path: '/cities', icon: '🌍' },
    { label: 'About Us', path: '/about', icon: 'ℹ️' }
  ];
}

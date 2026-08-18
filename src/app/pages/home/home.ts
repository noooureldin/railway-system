import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  readonly values = [
    { icon: '🌱', title: 'Lower carbon travel', text: 'Rail typically produces a fraction of the CO₂ per passenger compared to short-haul flights.' },
    { icon: '🏙️', title: 'City centre to city centre', text: 'No airport transfers — most stations sit right in the heart of town.' },
    { icon: '💶', title: 'Fair, transparent pricing', text: 'Clear fares and no hidden baggage fees.' },
    { icon: '🛡️', title: 'Reliable support', text: 'Real assistance if your journey changes, day or night.' }
  ];
}
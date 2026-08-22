import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  values = [ { icon: '🚆', title: 'Reliable Travel', text: 'Enjoy dependable railway services connecting cities and destinations across Egypt.' },
     { icon: '🗺️', title: 'Explore Egypt', text: 'Travel easily between Cairo, Alexandria, Luxor, Aswan and many other destinations.' },
      { icon: '👌', title: 'Comfortable Journey', text: 'Choose from different train services designed to make your journey more comfortable.' }
      , { icon: '🌍', title: 'Sustainable Transport', text: 'Railway travel provides an efficient transportation option for millions of passengers.' } ];
}

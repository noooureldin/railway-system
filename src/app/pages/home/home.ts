import { Component, signal, computed, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface City {
  name: string;
  country: string;
  imageUrl: string;
  lat: number;
  lng: number;
}

interface Trip {
  id: string;
  fromCity: string;
  toCity: string;
  depDate: string;
  depTime: string;
  arrTime: string;
  duration: string;
  durationHours: number;
  distanceKm: number;
  price: number;
  trainType: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @ViewChild('resultsSection') resultsSection!: ElementRef;

  Math = Math;

  // 20 countries, 3 cities each (capital + 2 major cities) = 60 cities total.
  // Real-world coordinates used throughout so distances/prices/durations stay realistic.
  readonly citiesList: City[] = [
    // France
    { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
    { name: 'Lyon', country: 'France', lat: 45.7640, lng: 4.8357, imageUrl: 'https://picsum.photos/seed/lyon/800/600' },
    { name: 'Marseille', country: 'France', lat: 43.2965, lng: 5.3698, imageUrl: 'https://picsum.photos/seed/marseille/800/600' },

    // United Kingdom
    { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80' },
    { name: 'Manchester', country: 'United Kingdom', lat: 53.4808, lng: -2.2426, imageUrl: 'https://picsum.photos/seed/manchester/800/600' },
    { name: 'Birmingham', country: 'United Kingdom', lat: 52.4862, lng: -1.8904, imageUrl: 'https://picsum.photos/seed/birmingham/800/600' },

    // Italy
    { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80' },
    { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.1900, imageUrl: 'https://picsum.photos/seed/milan/800/600' },
    { name: 'Naples', country: 'Italy', lat: 40.8518, lng: 14.2681, imageUrl: 'https://picsum.photos/seed/naples/800/600' },

    // Spain
    { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80' },
    { name: 'Barcelona', country: 'Spain', lat: 41.3874, lng: 2.1686, imageUrl: 'https://picsum.photos/seed/barcelona/800/600' },
    { name: 'Valencia', country: 'Spain', lat: 39.4699, lng: -0.3763, imageUrl: 'https://picsum.photos/seed/valencia/800/600' },

    // Germany
    { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80' },
    { name: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.5820, imageUrl: 'https://picsum.photos/seed/munich/800/600' },
    { name: 'Hamburg', country: 'Germany', lat: 53.5511, lng: 9.9937, imageUrl: 'https://picsum.photos/seed/hamburg/800/600' },

    // Netherlands
    { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80' },
    { name: 'Rotterdam', country: 'Netherlands', lat: 51.9244, lng: 4.4777, imageUrl: 'https://picsum.photos/seed/rotterdam/800/600' },
    { name: 'Utrecht', country: 'Netherlands', lat: 52.0907, lng: 5.1214, imageUrl: 'https://picsum.photos/seed/utrecht/800/600' },

    // Austria
    { name: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738, imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80' },
    { name: 'Salzburg', country: 'Austria', lat: 47.8095, lng: 13.0550, imageUrl: 'https://picsum.photos/seed/salzburg/800/600' },
    { name: 'Graz', country: 'Austria', lat: 47.0707, lng: 15.4395, imageUrl: 'https://picsum.photos/seed/graz/800/600' },

    // Belgium
    { name: 'Brussels', country: 'Belgium', lat: 50.8503, lng: 4.3517, imageUrl: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=800&q=80' },
    { name: 'Antwerp', country: 'Belgium', lat: 51.2194, lng: 4.4025, imageUrl: 'https://picsum.photos/seed/antwerp/800/600' },
    { name: 'Ghent', country: 'Belgium', lat: 51.0543, lng: 3.7174, imageUrl: 'https://picsum.photos/seed/ghent/800/600' },

    // Portugal
    { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393, imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80' },
    { name: 'Porto', country: 'Portugal', lat: 41.1579, lng: -8.6291, imageUrl: 'https://picsum.photos/seed/porto/800/600' },
    { name: 'Braga', country: 'Portugal', lat: 41.5454, lng: -8.4265, imageUrl: 'https://picsum.photos/seed/braga/800/600' },

    // Czech Republic
    { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lng: 14.4378, imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80' },
    { name: 'Brno', country: 'Czech Republic', lat: 49.1951, lng: 16.6068, imageUrl: 'https://picsum.photos/seed/brno/800/600' },
    { name: 'Ostrava', country: 'Czech Republic', lat: 49.8209, lng: 18.2625, imageUrl: 'https://picsum.photos/seed/ostrava/800/600' },

    // Hungary
    { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402, imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80' },
    { name: 'Debrecen', country: 'Hungary', lat: 47.5316, lng: 21.6273, imageUrl: 'https://picsum.photos/seed/debrecen/800/600' },
    { name: 'Szeged', country: 'Hungary', lat: 46.2530, lng: 20.1414, imageUrl: 'https://picsum.photos/seed/szeged/800/600' },

    // Poland
    { name: 'Warsaw', country: 'Poland', lat: 52.2297, lng: 21.0122, imageUrl: 'https://images.unsplash.com/photo-1519197924294-4ac991a115fe?auto=format&fit=crop&w=800&q=80' },
    { name: 'Krakow', country: 'Poland', lat: 50.0647, lng: 19.9450, imageUrl: 'https://picsum.photos/seed/krakow/800/600' },
    { name: 'Wroclaw', country: 'Poland', lat: 51.1079, lng: 17.0385, imageUrl: 'https://picsum.photos/seed/wroclaw/800/600' },

    // Greece
    { name: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275, imageUrl: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=800&q=80' },
    { name: 'Thessaloniki', country: 'Greece', lat: 40.6401, lng: 22.9444, imageUrl: 'https://picsum.photos/seed/thessaloniki/800/600' },
    { name: 'Patras', country: 'Greece', lat: 38.2466, lng: 21.7346, imageUrl: 'https://picsum.photos/seed/patras/800/600' },

    // Denmark
    { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lng: 12.5683, imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80' },
    { name: 'Aarhus', country: 'Denmark', lat: 56.1629, lng: 10.2039, imageUrl: 'https://picsum.photos/seed/aarhus/800/600' },
    { name: 'Odense', country: 'Denmark', lat: 55.4038, lng: 10.4024, imageUrl: 'https://picsum.photos/seed/odense/800/600' },

    // Sweden
    { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686, imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80' },
    { name: 'Gothenburg', country: 'Sweden', lat: 57.7089, lng: 11.9746, imageUrl: 'https://picsum.photos/seed/gothenburg/800/600' },
    { name: 'Malmo', country: 'Sweden', lat: 55.6050, lng: 13.0038, imageUrl: 'https://picsum.photos/seed/malmo/800/600' },

    // Norway
    { name: 'Oslo', country: 'Norway', lat: 59.9139, lng: 10.7522, imageUrl: 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bergen', country: 'Norway', lat: 60.3913, lng: 5.3221, imageUrl: 'https://picsum.photos/seed/bergen/800/600' },
    { name: 'Trondheim', country: 'Norway', lat: 63.4305, lng: 10.3951, imageUrl: 'https://picsum.photos/seed/trondheim/800/600' },

    // Ireland
    { name: 'Dublin', country: 'Ireland', lat: 53.3498, lng: -6.2603, imageUrl: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cork', country: 'Ireland', lat: 51.8985, lng: -8.4756, imageUrl: 'https://picsum.photos/seed/cork/800/600' },
    { name: 'Galway', country: 'Ireland', lat: 53.2707, lng: -9.0568, imageUrl: 'https://picsum.photos/seed/galway/800/600' },

    // Switzerland
    { name: 'Bern', country: 'Switzerland', lat: 46.9480, lng: 7.4474, imageUrl: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=800&q=80' },
    { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5417, imageUrl: 'https://picsum.photos/seed/zurich/800/600' },
    { name: 'Geneva', country: 'Switzerland', lat: 46.2044, lng: 6.1432, imageUrl: 'https://picsum.photos/seed/geneva/800/600' },

    // Croatia
    { name: 'Zagreb', country: 'Croatia', lat: 45.8150, lng: 15.9819, imageUrl: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Split', country: 'Croatia', lat: 43.5081, lng: 16.4402, imageUrl: 'https://picsum.photos/seed/split/800/600' },
    { name: 'Rijeka', country: 'Croatia', lat: 45.3271, lng: 14.4422, imageUrl: 'https://picsum.photos/seed/rijeka/800/600' },

    // Romania
    { name: 'Bucharest', country: 'Romania', lat: 44.4268, lng: 26.1025, imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cluj-Napoca', country: 'Romania', lat: 46.7712, lng: 23.6236, imageUrl: 'https://picsum.photos/seed/clujnapoca/800/600' },
    { name: 'Timisoara', country: 'Romania', lat: 45.7489, lng: 21.2087, imageUrl: 'https://picsum.photos/seed/timisoara/800/600' }
  ];

  // International corridors — capital-to-capital, same as the original network.
  private readonly internationalNetwork: [string, string][] = [
    ['London', 'Paris'],
    ['London', 'Brussels'],
    ['London', 'Dublin'],
    ['Paris', 'Brussels'],
    ['Paris', 'Amsterdam'],
    ['Paris', 'Bern'],
    ['Paris', 'Madrid'],
    ['Brussels', 'Amsterdam'],
    ['Amsterdam', 'Berlin'],
    ['Amsterdam', 'Copenhagen'],
    ['Berlin', 'Prague'],
    ['Berlin', 'Warsaw'],
    ['Berlin', 'Copenhagen'],
    ['Prague', 'Vienna'],
    ['Prague', 'Warsaw'],
    ['Vienna', 'Budapest'],
    ['Vienna', 'Zagreb'],
    ['Vienna', 'Bern'],
    ['Vienna', 'Rome'],
    ['Budapest', 'Bucharest'],
    ['Budapest', 'Zagreb'],
    ['Copenhagen', 'Stockholm'],
    ['Stockholm', 'Oslo'],
    ['Madrid', 'Lisbon'],
    ['Rome', 'Zagreb'],
    ['Rome', 'Bern'],
    ['Rome', 'Athens'],
    ['Warsaw', 'Bucharest']
  ];

  // Domestic legs — every city connects to the other two cities in its own country,
  // so each of the 60 cities has its own distinct set of connections.
  private readonly domesticNetwork: [string, string][] = this.buildDomesticEdges();

  // Full rail network used to build the schedule (domestic + international).
  readonly railNetwork: [string, string][] = [...this.domesticNetwork, ...this.internationalNetwork];

  readonly trainTypeCycle = ['Eurostar', 'TGV Express', 'ICE Highspeed', 'Railjet', 'Frecciarossa', 'EuroCity'];

  // One trip per connected pair, generated from real-world distances.
  readonly dailySchedule: Trip[] = this.railNetwork.map(([fromCity, toCity], i) => {
    const from = this.citiesList.find(c => c.name === fromCity)!;
    const to = this.citiesList.find(c => c.name === toCity)!;
    const distanceKm = this.haversineDistance(from.lat, from.lng, to.lat, to.lng);
    const avgSpeedKmh = 160;
    const durationHours = distanceKm / avgSpeedKmh + 0.35; // + boarding/stop overhead
    const depTime = '08:00';
    const arrTime = this.addHoursToTime(depTime, durationHours);

    return {
      id: `TR-${String(i + 1).padStart(2, '0')}`,
      fromCity,
      toCity,
      depDate: '2026-08-18',
      depTime,
      arrTime,
      duration: this.formatDuration(durationHours),
      durationHours,
      distanceKm: Math.round(distanceKm),
      price: Math.round(25 + distanceKm * 0.11),
      trainType: this.trainTypeCycle[i % this.trainTypeCycle.length]
    };
  });

  // Fixed Eurostar and High-speed Train Photos
  readonly trainExteriorPhotos: Record<string, string> = {
    'Eurostar': 'https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=600&q=80',
    'TGV Express': 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=600&q=80',
    'ICE Highspeed': 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80',
    'Frecciarossa': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
    'Railjet': 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?auto=format&fit=crop&w=600&q=80',
    'EuroCity': 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80'
  };

  // Dedicated Interior Photos for 1st, 2nd, and 3rd Class
  readonly classSeatPhotos: Record<string, { title: string; imageUrl: string; desc: string }> = {
    '1st': {
      title: '1st Class Luxury Cabin',
      imageUrl: 'https://images.unsplash.com/photo-1509329502519-c7bec26f5808?auto=format&fit=crop&w=600&q=80',
      desc: 'Reclining leather seats, extra legroom, at-seat catering, and quiet atmosphere.'
    },
    '2nd': {
      title: '2nd Class Premium Comfort',
      imageUrl: 'https://images.unsplash.com/photo-1715395249880-921d0a5f9987?auto=format&fit=crop&w=600&q=80',
      desc: 'Ergonomic seats, power outlets, overhead luggage space, and complimentary Wi-Fi.'
    },
    '3rd': {
      title: '3rd Class Standard Transit',
      imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80',
      desc: 'Standard passenger seating ideal for budget travelers and short-distance commutes.'
    }
  };

  // 20 unique country names, in the order cities appear above.
  readonly countriesList: string[] = Array.from(new Set(this.citiesList.map(c => c.country)));

  // Form Signals — country pickers first, then a city picker scoped to that country.
  selectedFromCountry = signal('France');
  selectedFromCity = signal('Paris');

  selectedToCountry = signal('Netherlands');
  selectedToCity = signal('Amsterdam');

  selectedClass = signal<'1st' | '2nd' | '3rd'>('2nd');
  passengerCount = signal(1);
  date = signal('2026-08-18');
  hasSearched = signal(false);

  // Booking Modal State
  selectedTripForBooking = signal<Trip | null>(null);
  isBookingModalOpen = signal(false);

  activeFromCity = computed(() => this.citiesList.find(c => c.name === this.selectedFromCity()) || this.citiesList[0]);
  activeToCity = computed(() => this.citiesList.find(c => c.name === this.selectedToCity()) || this.citiesList[1]);

  // The 3 cities belonging to whichever country is currently selected as origin/destination.
  fromCitiesInCountry = computed(() =>
    this.citiesList.filter(c => c.country === this.selectedFromCountry() && c.name !== this.selectedToCity())
  );
  destinationOptions = computed(() =>
    this.citiesList.filter(c => c.country === this.selectedToCountry() && c.name !== this.selectedFromCity())
  );

  activeClassDetails = computed(() => this.classSeatPhotos[this.selectedClass()]);

  // Straight-line (great-circle) distance between the chosen origin and destination
  totalDistanceKm = computed(() => {
    const from = this.activeFromCity();
    const to = this.activeToCity();
    return this.haversineDistance(from.lat, from.lng, to.lat, to.lng);
  });

  // The one direct trip for this exact route, if the rail network connects them
  directTrip = computed<Trip | null>(() => {
    const from = this.selectedFromCity();
    const to = this.selectedToCity();
    return this.dailySchedule.find(
      trip => (trip.fromCity === from && trip.toCity === to) || (trip.fromCity === to && trip.toCity === from)
    ) || null;
  });

  // When there's no direct trip, find the shortest multi-leg route (usually
  // domestic -> international -> domestic) through the full 60-city network.
  connectingRoute = computed<Trip[] | null>(() => {
    if (this.directTrip()) return null;
    if (this.selectedFromCity() === this.selectedToCity()) return null;
    return this.findShortestPath(this.selectedFromCity(), this.selectedToCity());
  });

  getTrainExterior(trainType: string): string {
    return this.trainExteriorPhotos[trainType] || 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80';
  }

  getClassMultiplier(): number {
    switch (this.selectedClass()) {
      case '1st': return 1.6;
      case '2nd': return 1.0;
      case '3rd': return 0.8;
      default: return 1.0;
    }
  }

  // Country/city selection handlers

  onFromCountryChange(country: string): void {
    this.selectedFromCountry.set(country);
    const cities = this.citiesList.filter(c => c.country === country);
    const pick = cities.find(c => c.name !== this.selectedToCity()) || cities[0];
    this.selectedFromCity.set(pick.name);
  }

  onToCountryChange(country: string): void {
    this.selectedToCountry.set(country);
    const cities = this.citiesList.filter(c => c.country === country);
    const pick = cities.find(c => c.name !== this.selectedFromCity()) || cities[0];
    this.selectedToCity.set(pick.name);
  }

  onFromCityChange(city: string): void {
    this.selectedFromCity.set(city);
    if (this.selectedToCity() === city) {
      const options = this.citiesList.filter(c => c.country === this.selectedToCountry() && c.name !== city);
      if (options.length) this.selectedToCity.set(options[0].name);
    }
  }

  onToCityChange(city: string): void {
    this.selectedToCity.set(city);
    if (this.selectedFromCity() === city) {
      const options = this.citiesList.filter(c => c.country === this.selectedFromCountry() && c.name !== city);
      if (options.length) this.selectedFromCity.set(options[0].name);
    }
  }

  executeSearch(): void {
    this.hasSearched.set(true);
    setTimeout(() => {
      if (this.resultsSection) {
        this.resultsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  // Booking Modal Methods
  openBookingModal(trip: Trip): void {
    this.selectedTripForBooking.set(trip);
    this.isBookingModalOpen.set(true);
  }

  closeBookingModal(): void {
    this.isBookingModalOpen.set(false);
    this.selectedTripForBooking.set(null);
  }

  confirmBooking(): void {
    alert(`Booking Confirmed! Confirmation code sent for ${this.passengerCount()} passenger(s).`);
    this.closeBookingModal();
  }

  // --- Network construction ---

  // Builds a domestic triangle (every city <-> every other city) for each country,
  // so all 3 cities in a country have their own distinct connections.
  private buildDomesticEdges(): [string, string][] {
    const edges: [string, string][] = [];
    const byCountry = new Map<string, string[]>();
    for (const city of this.citiesList) {
      const list = byCountry.get(city.country) ?? [];
      list.push(city.name);
      byCountry.set(city.country, list);
    }
    for (const cities of byCountry.values()) {
      for (let i = 0; i < cities.length; i++) {
        for (let j = i + 1; j < cities.length; j++) {
          edges.push([cities[i], cities[j]]);
        }
      }
    }
    return edges;
  }

  // --- Pathfinding ---

  // Dijkstra's algorithm over the city graph, weighted by real distance (km),
  // returning the ordered list of Trip legs for the shortest route, or null if unreachable.
  private findShortestPath(from: string, to: string): Trip[] | null {
    const adjacency = new Map<string, { to: string; trip: Trip }[]>();
    for (const trip of this.dailySchedule) {
      if (!adjacency.has(trip.fromCity)) adjacency.set(trip.fromCity, []);
      if (!adjacency.has(trip.toCity)) adjacency.set(trip.toCity, []);
      adjacency.get(trip.fromCity)!.push({ to: trip.toCity, trip });
      adjacency.get(trip.toCity)!.push({ to: trip.fromCity, trip: this.reverseTrip(trip) });
    }

    const distances = new Map<string, number>();
    const previous = new Map<string, { city: string; trip: Trip }>();
    const visited = new Set<string>();
    const unvisited = new Set<string>(adjacency.keys());

    for (const city of unvisited) distances.set(city, Infinity);
    distances.set(from, 0);

    while (unvisited.size > 0) {
      let current: string | null = null;
      let currentDist = Infinity;
      for (const city of unvisited) {
        const d = distances.get(city) ?? Infinity;
        if (d < currentDist) {
          currentDist = d;
          current = city;
        }
      }
      if (current === null || current === to) break;

      unvisited.delete(current);
      visited.add(current);

      for (const edge of adjacency.get(current) ?? []) {
        if (visited.has(edge.to)) continue;
        const newDist = currentDist + edge.trip.distanceKm;
        if (newDist < (distances.get(edge.to) ?? Infinity)) {
          distances.set(edge.to, newDist);
          previous.set(edge.to, { city: current, trip: edge.trip });
        }
      }
    }

    if (!previous.has(to) && from !== to) return null;

    const legs: Trip[] = [];
    let step = to;
    while (step !== from) {
      const prev = previous.get(step);
      if (!prev) return null;
      legs.unshift(prev.trip);
      step = prev.city;
    }
    return legs.length ? legs : null;
  }

  private reverseTrip(trip: Trip): Trip {
    return {
      ...trip,
      id: `${trip.id}-R`,
      fromCity: trip.toCity,
      toCity: trip.fromCity,
      depTime: trip.depTime,
      arrTime: trip.arrTime
    };
  }

  // --- Distance & time helpers ---

  private haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(deg: number): number {
    return (deg * Math.PI) / 180;
  }

  private addHoursToTime(time: string, hoursToAdd: number): string {
    const [h, m] = time.split(':').map(Number);
    const totalMinutes = h * 60 + m + Math.round(hoursToAdd * 60);
    const wrapped = ((totalMinutes % 1440) + 1440) % 1440;
    const outH = Math.floor(wrapped / 60);
    const outM = wrapped % 60;
    return `${String(outH).padStart(2, '0')}:${String(outM).padStart(2, '0')}`;
  }

  private formatDuration(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${String(m).padStart(2, '0')}m`;
  }
}
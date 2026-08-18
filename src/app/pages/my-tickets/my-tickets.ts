import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-tickets',
  imports: [],
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css',
})
export class MyTickets {

  constructor(private router: Router) {}

  ticket = {
    passenger: 'Saif El Deen',

    trainType: 'High-Speed Train',

    from: {
      city: 'Cairo',
      station: 'Ramses Station',
      time: '08:30'
    },

    to: {
      city: 'Alexandria',
      station: 'Misr Station',
      time: '11:00'
    },

    date: '25 AUG 2026',

    duration: '2h 30m',

    trainNumber: 'س ح م 202',

    coach: '04',

    seat: '18A',

    price: 'EGP 250',

    ticketNumber: 'SHM-202-18A',

    status: 'CONFIRMED'
  };


  goHome() {
    this.router.navigate(['/']);
  }


  downloadTicket() {
    window.print();
  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ticket {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  trainType: string;
  seatNumber: string;
  price: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css'
})
export class MyTickets {


  myTickets: Ticket[] = [

    {
      id: 1,
      from: 'Cairo',
      to: 'Mansoura',
      date: '2026-08-25',
      time: '10:00 AM',
      trainType: 'VIP',
      seatNumber: 'Car 2 - Seat 14',
      price: 70,
      status: 'Upcoming'
    },

    {
      id: 2,
      from: 'Mansoura',
      to: 'Alexandria',
      date: '2026-08-15',
      time: '02:30 PM',
      trainType: 'Standard',
      seatNumber: 'Car 5 - Seat 33',
      price: 45,
      status: 'Completed'
    },

    {
      id: 3,
      from: 'Cairo',
      to: 'Mansoura',
      date: '2026-08-30',
      time: '06:30 PM',
      trainType: 'First Class',
      seatNumber: 'Car 1 - Seat 08',
      price: 95,
      status: 'Upcoming'
    }

  ];



  activeFilter:
    'All' |
    'Upcoming' |
    'Completed' |
    'Cancelled' = 'All';

  searchTerm = '';



  selectedTicket: Ticket | null = null;



  get filteredTickets(): Ticket[] {

    const search =
      this.searchTerm
        .toLowerCase()
        .trim();

    return this.myTickets.filter(ticket => {

      const matchesFilter =
        this.activeFilter === 'All' ||
        ticket.status === this.activeFilter;


      const matchesSearch =
        ticket.from
          .toLowerCase()
          .includes(search)

        ||

        ticket.to
          .toLowerCase()
          .includes(search)

        ||

        ticket.trainType
          .toLowerCase()
          .includes(search)

        ||

        ticket.seatNumber
          .toLowerCase()
          .includes(search)

        ||

        ticket.status
          .toLowerCase()
          .includes(search);


      return (
        matchesFilter &&
        matchesSearch
      );

    });

  }

 

  get totalTickets(): number {

    return this.myTickets.length;

  }


  get upcomingTickets(): number {

    return this.myTickets.filter(
      ticket => ticket.status === 'Upcoming'
    ).length;

  }


  get completedTickets(): number {

    return this.myTickets.filter(
      ticket => ticket.status === 'Completed'
    ).length;

  }


  get cancelledTickets(): number {

    return this.myTickets.filter(
      ticket => ticket.status === 'Cancelled'
    ).length;

  }



  setFilter(
    filter:
      'All' |
      'Upcoming' |
      'Completed' |
      'Cancelled'
  ): void {

    this.activeFilter = filter;

  }



  viewTicket(ticket: Ticket): void {

    this.selectedTicket = ticket;

  }



  closeTicketDetails(): void {

    this.selectedTicket = null;

  }



  cancelTicket(ticket: Ticket): void {

    if (ticket.status !== 'Upcoming') {
      return;
    }


    const confirmed = window.confirm(

      `Are you sure you want to cancel your ticket from ${ticket.from} to ${ticket.to}?`

    );


    if (!confirmed) {
      return;
    }


    this.myTickets = this.myTickets.map(t =>

      t.id === ticket.id

        ? {
            ...t,
            status: 'Cancelled'
          }

        : t

    );



    if (
      this.selectedTicket &&
      this.selectedTicket.id === ticket.id
    ) {

      this.selectedTicket = {
        ...ticket,
        status: 'Cancelled'
      };

    }


    window.alert(
      'Ticket cancelled successfully.'
    );

  }



  clearSearch(): void {

    this.searchTerm = '';

    this.activeFilter = 'All';

  }

}
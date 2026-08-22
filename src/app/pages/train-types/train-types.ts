import { Component } from '@angular/core';

export interface TrainType {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-train-types',
  imports: [],
  templateUrl: './train-types.html',
  styleUrl: './train-types.css',
})
export class TrainTypes {

trains: TrainType[] = [
  {
    id: 1,
    name: 'Mohsen (Tahya Misr)',
    description: 'Economical and upgraded trains, offering a practical choice for fast daily transportation at an affordable cost.',
    imageUrl: '/assets/mohsan.jpeg'
  },

  {
    id: 2,
    name: 'Russian Train (Dynamic Ventilation)',
    description: 'Russian trains equipped with a dynamic ventilation system, providing a comfortable and economical journey.',
    imageUrl: '/assets/rose.jpeg'
  },

  {
    id: 3,
    name: 'Air-Conditioned Russian Train',
    description: 'Modern Russian trains equipped with central air conditioning to provide maximum comfort for passengers.',
    imageUrl: '/assets/mokeph.jpeg'
  },

  {
    id: 4,
    name: 'Air-Conditioned Spanish Train',
    description: 'Comfortable air-conditioned trains offering a fast and pleasant travel experience with high-quality services.',
    imageUrl: '/assets/asbane.jpeg'
  },

  {
    id: 5,
    name: 'Sleeping Train',
    description: 'Trains equipped with comfortable sleeping cabins, specially designed for long-distance journeys.',
    imageUrl: '/assets/nome.jpeg'
  }
];

}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from '../mock-vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const vehicles = [
        {
            id: 0,
            name: 'Renault',
            model: 'Clio',
            weight: '500kg',
            color: 'red'
        },
        {
            id: 1,
            name: 'Mazda',
            model: 'RX-8',
            weight: '600kg',
            color: 'black'
        },
        {
            id: 2,
            name: 'Honda',
            model: 'Jazz',
            weight: '450kg',
            color: 'grey'
        },
        {
            id: 3,
            name: 'Dodge',
            model: 'Viper',
            weight: '700kg',
            color: 'black'
        },
        {
            id: 4,
            name: 'Fiat',
            model: 'Uno',
            weight: '450kg',
            color: 'red'
        },
        {
            id: 5,
            name: 'BMW',
            model: 'X6',
            weight: '600kg',
            color: 'blue'
        },
        {
            id: 6,
            name: 'Kia',
            model: 'Rio',
            weight: '550kg',
            color: 'yellow'
        },
        {
            id: 7,
            name: 'Hummer',
            model: 'H2',
            weight: '700kg',
            color: 'black'
        },
        {
            id: 8,
            name: 'Ford',
            model: 'Fiesta',
            weight: '650kg',
            color: 'blue'
        },
        {
            id: 9,
            name: 'Lada',
            model: '100',
            weight: '450kg',
            color: 'yellow'
        },
        {
            id: 10,
            name: 'Renault',
            model: 'Clio',
            weight: '500kg',
            color: 'red'
        },
        {
            id: 11,
            name: 'Mazda',
            model: 'RX-8',
            weight: '600kg',
            color: 'black'
        },
        {
            id: 12,
            name: 'Honda',
            model: 'Jazz',
            weight: '450kg',
            color: 'grey'
        },
        {
            id: 13,
            name: 'Dodge',
            model: 'Viper',
            weight: '700kg',
            color: 'black'
        },
        {
            id: 14,
            name: 'Fiat',
            model: 'Uno',
            weight: '450kg',
            color: 'red'
        },
        {
            id: 15,
            name: 'BMW',
            model: 'X6',
            weight: '600kg',
            color: 'blue'
        },
        {
            id: 16,
            name: 'Kia',
            model: 'Rio',
            weight: '550kg',
            color: 'yellow'
        },
        {
            id: 17,
            name: 'Hummer',
            model: 'H2',
            weight: '700kg',
            color: 'black'
        },
        {
            id: 18,
            name: 'Ford',
            model: 'Fiesta',
            weight: '650kg',
            color: 'blue'
        },
        {
            id: 19,
            name: 'Lada',
            model: '100',
            weight: '450kg',
            color: 'yellow'
        }
    ];
    return {vehicles};
  }

}

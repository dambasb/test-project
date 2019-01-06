import { Injectable } from '@angular/core';

import { Vehicle } from '../mock-vehicle/vehicle';
import { VEHICLES } from '../mock-vehicle/mock-vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor() { }

  getVehicles(): Vehicle[] {
    return VEHICLES;
  }
}
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../common/mock-vehicle/vehicle';
import { VehicleService } from '../../../common/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicles = this.vehicleService.getVehicles();
  }

}

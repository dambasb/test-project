import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../common/mock-vehicle/vehicle';
import { VehicleService } from '../../../common/services/vehicle.service';

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  dataSource = new VehicleTableDataSource(this.vehicleService);
  displayedColumns = ['id', 'name', 'model', 'weight', 'color'];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
   
  }


}

export class VehicleTableDataSource extends DataSource<any> {

  constructor(private vehicleService: VehicleService) {
    super();
  }

  connect(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicles();
  }

  disconnect() { }

}
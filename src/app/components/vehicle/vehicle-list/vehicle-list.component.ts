import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../../common/services/vehicle.service';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})

export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { } 

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'model', 'weight', 'color'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  
  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      list => {
        let array = list.map(item => item);
        this.dataSource = new MatTableDataSource(array);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
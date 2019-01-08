import { Injectable } from '@angular/core';
import { Vehicle } from '../mock-vehicle/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  private vehiclesUrl = 'api/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles (): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl)
  }

}
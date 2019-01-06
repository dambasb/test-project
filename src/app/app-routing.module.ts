import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { VehicleEditComponent } from './components/vehicle/vehicle-edit/vehicle-edit.component';

const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: VehicleListComponent },
{ path: 'vehicle/:id', component: VehicleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

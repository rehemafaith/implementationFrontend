import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Articles',
    component:ArticlesComponent
  },
  {
    path: 'Appointment',
    component:AppointmentsComponent
  },
  {
    path: 'Patients',
    component:PatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

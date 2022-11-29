import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from '../service/patients/patients.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patientsForm: FormGroup;
  PatientsList: any = [];
  PatientsArr: any = [];
  constructor( 
    public patientsService:PatientsService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(): void {
    this.loadAllPatients();
  }

  loadAllPatients(){
   return this.patientsService.getAllPatients().subscribe((data: {}) => {
    this.PatientsList = data;
    console.log(data)
  })
  }
}

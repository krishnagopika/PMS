import { Component } from '@angular/core';

@Component({
  selector: 'app-postlogin-toolbar-patient',
  templateUrl: './postlogin-toolbar-patient.component.html',
  styleUrls: ['./postlogin-toolbar-patient.component.css']
})
export class PostloginToolbarPatientComponent {
  
  patient_id=sessionStorage.getItem('patient_id')
}

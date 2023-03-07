import { Component } from '@angular/core';
import { Patient } from '../../../model/patient';
import { PatientService } from '../../../service/patient/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {

  patient:Patient|undefined;
  patient_id:any;

  constructor(patientService :PatientService){
    this.patient_id=sessionStorage.getItem('patient_id')
    patientService.getPatient(this.patient_id).subscribe(
      (data)=>{this.patient=data, console.log(data,this.patient_id)
        if(this.patient?.gender=='M'){
          this.patient.gender="Male"
        }
        if(this.patient?.gender=='F'){
          this.patient.gender="Female"
        }
        if(this.patient?.gender=='O'){
          this.patient.gender="Other"
        }
      },
     
      err => {
        console.log(err.message)
      }
      );


  }



}

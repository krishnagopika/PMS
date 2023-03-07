import {Component,OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

import { Patient } from '../../../model/patient';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit{
  patient: Patient= new Patient(0,"","","","",new Date,"","","","");
  message:string =" ";
  isRegistered:boolean=false;
  register:boolean=false;
  error:boolean=false;

  constructor(private patientService:PatientService){}

  public registerPatient(){
    if(this.patient.contactNumber!="", this.patient.dob, this.patient.email!="" ,this.patient.firstName!="" , this.patient.gender!="",this.patient.lastName!="" , this.patient.password!="", this.patient.title!=""){
      this.error=false;
   this.patientService.registerPatient(this.patient).subscribe(
    (data)=>{this.message="Registraion Successfull proceed to Login",console.log(data), this.isRegistered=true;
  },
    err => {
      console.log(err.message),
      this.register=true,
      this.message="Unable to register"
      ;
    }
    
    );
  }
  else{
    this.message="Enter all the mandatory fields"
    this.error=true;
  }
  }
  ngOnInit(): void {
    
  }

  public onOpenModel(patient:Patient){
    const button = document.createElement('button');
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  titleFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  contactNumberFormControl = new FormControl('', [Validators.required]);
  dobFormControl = new FormControl('', [Validators.required]);
  matcher = new PatientRegistrationFormErrorStateMatcher();

  genders: string[] = ['Male', 'Female', 'Others'];
  titles: string[] = ['Mr', 'Mrs', 'Dr', "Miss"];
  
}

export class PatientRegistrationFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
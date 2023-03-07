import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientForgotPasswordComponent } from '../patient-forgot-password/patient-forgot-password.component';
import { PatientLogin } from '../../../model/patient-login';
import { Patient } from '../../../model/patient';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})

export class PatientLoginComponent {
  login:boolean=false;
  message:string="";
  patient = new Patient(0,"","","","",new Date,"","","","");
  patientLogin= new PatientLogin("","");
  constructor(public dialog: MatDialog,private patientService:PatientService, private router: Router){
  }
  public loginPatient(patientLogin:PatientLogin):void{
    
   this.patientService.loginPatient(patientLogin).subscribe(
    (data)=>{this.patient=data, console.log(this.patient), this.router.navigateByUrl("/patient-dashboard"), sessionStorage.setItem('patientId', data.id),sessionStorage.setItem('patientName', data.firstName),sessionStorage.setItem('patient_id', data.id);},
   
    err => {
      console.log(err.message),
      this.message="Wrong email or Password",
      this.login=true;
    }
    );

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new PatientLoginFormErrorStateMatcher();
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      title : 'Basic Diagnosis Info',
      buttonName: 'Save'
    }
    const dialogRef = this.dialog.open(PatientForgotPasswordComponent, dialogConfig);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class PatientLoginFormErrorStateMatcher implements ErrorStateMatcher {
  
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  
}

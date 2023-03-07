import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PatientLoginFormErrorStateMatcher } from '../patient-login/patient-login.component';

@Component({
  selector: 'app-patient-reset-password',
  templateUrl: './patient-reset-password.component.html',
  styleUrls: ['./patient-reset-password.component.css']
})
export class PatientResetPasswordComponent {
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new PatientLoginFormErrorStateMatcher();
}
export class PatientResetPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
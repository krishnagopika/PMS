import { Component, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmDrScheduleNewComponent } from '../../admin/adm-dr-schedule-new/adm-dr-schedule-new.component';

@Component({
  selector: 'app-patient-forgot-password',
  templateUrl: './patient-forgot-password.component.html',
  styleUrls: ['./patient-forgot-password.component.css']
})
export class PatientForgotPasswordComponent {

      emailFormControl = new FormControl('', [Validators.required, Validators.email]);
      matcher = new PatientForgotPasswordErrorStateMatcher();
  
  form!: FormGroup;
  title!: string;
  email!: string;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AdmDrScheduleNewComponent>) { 
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.dialogRef.close(this.form.value);
    }    
}
export class PatientForgotPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

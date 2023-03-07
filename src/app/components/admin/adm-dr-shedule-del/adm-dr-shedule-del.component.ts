import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmDrScheduleNewComponent } from '../adm-dr-schedule-new/adm-dr-schedule-new.component';

@Component({
  selector: 'app-adm-dr-shedule-del',
  templateUrl: './adm-dr-shedule-del.component.html',
  styleUrls: ['./adm-dr-shedule-del.component.css']
})
export class AdmDrSheduleDelComponent {
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AdmDrScheduleNewComponent>) { 
    }
  Noinfo(){
    this.dialogRef.close();
  }
  Yesinfo(){
    this.dialogRef.close();
  }  
}

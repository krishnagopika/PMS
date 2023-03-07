import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-prescription-dialog',
  templateUrl: './new-prescription-dialog.component.html',
  styleUrls: ['./new-prescription-dialog.component.css']
})
export class NewPrescriptionDialogComponent  {

  ngOnInit(): void {
    this.form = this.fb.group({
      mname: [, [Validators.required]],
      dosage: ['',[Validators.required]],
      notes: [''],
    })
  }
  form!: FormGroup;
  title!: string;
  mname!: string;
  dosage!: string;
  notes!: string;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<NewPrescriptionDialogComponent>) { 
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.dialogRef.close(this.form.value);
    }    
}

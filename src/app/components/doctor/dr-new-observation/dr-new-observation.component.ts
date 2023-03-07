import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dr-new-observation',
  templateUrl: './dr-new-observation.component.html',
  styleUrls: ['./dr-new-observation.component.css']
})
export class DrNewObservationComponent {

  ngOnInit(): void {
    this.form = this.fb.group({
      testConducted: [, [Validators.required]],
      actualResult: ['',[Validators.required]],
      status: ['',[Validators.required]],
      remarks: [''],
    })
  }
  form!: FormGroup;
  title!: string;
  testConducted!: string;
  actualResult!: string;
  status!: string;
  remakrs!: string;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DrNewObservationComponent>) { 
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.dialogRef.close(this.form.value);
    }    
}

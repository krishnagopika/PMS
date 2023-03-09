import { Component, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Test } from 'src/app/model/test';
import { DrNewObservationComponent } from '../dr-new-observation/dr-new-observation.component';
import { DoctorService } from 'src/app/service/doctor/doctor.service';

@Component({
  selector: 'app-dr-update-observation',
  templateUrl: './dr-update-observation.component.html',
  styleUrls: ['./dr-update-observation.component.css']
})
export class DrUpdateObservationComponent {
  testUpdated=false;
  message="Update Test"
  visit_details_id:number=0;
  test_id=0;
  test:Test= new Test(0,"","",0);
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

  constructor(private fb: FormBuilder, private doctorService:DoctorService,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DrNewObservationComponent>) { 
      this.test.visit_details_id=data.visit_details_id;
      this.test_id=data.test_id;

    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.testUpdated=true;
      this.doctorService.updateTest(this.test_id, this.test).subscribe(
        (data)=>{
          console.log("Test Updated Successfully",data)
          this.message="Updated Test Successfully";
        },
        err=>
        {
          this.message="Unable to update test",
          console.log(err.message);
        }
      )
    }    
}

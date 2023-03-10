import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Test } from 'src/app/model/test';
import { DoctorService } from 'src/app/service/doctor/doctor.service';


@Component({
  selector: 'app-dr-new-observation',
  templateUrl: './dr-new-observation.component.html',
  styleUrls: ['./dr-new-observation.component.css']
})
export class DrNewObservationComponent {
   testAdded=false;
  visit_details_id:number=0;
  test:Test= new Test(0,"","",0);
  message="Observations Found";
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
      this.visit_details_id=data.visit_details_id;

    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.testAdded=true;
      this.test.visit_details_id=this.visit_details_id;
      this.doctorService.addTest(this.test).subscribe(
        (data)=>{
          console.log("Test Added Successfully")
          this.message="Added Test Successfully";
        },
        err=>
        {
          this.message="Unable to add test",
          console.log(err.message);
        }
      )
      
    }    
}

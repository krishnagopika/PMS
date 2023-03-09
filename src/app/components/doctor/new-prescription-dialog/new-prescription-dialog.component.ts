import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Prescription } from 'src/app/model/prescription';
import { DoctorService } from 'src/app/service/doctor/doctor.service';


@Component({
  selector: 'app-new-prescription-dialog',
  templateUrl: './new-prescription-dialog.component.html',
  styleUrls: ['./new-prescription-dialog.component.css']
})
export class NewPrescriptionDialogComponent  {
  prescription:Prescription=new Prescription(0,"","",0);
  prescriptionAdded=false;
  visit_details_id:any;
  message="Add Prescription Details"
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
    private dialogRef : MatDialogRef<NewPrescriptionDialogComponent>, private doctorService:DoctorService) { 
      this.visit_details_id=data.visit_details_id;
      this.prescription.visit_details_id=this.visit_details_id;
     
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      
      this.doctorService.addPrescription(this.prescription).subscribe(
        (data)=>{
          this.prescription=data
          this.message="Prescription Added Successfully"
          this.prescriptionAdded=true;
          console.log(this.prescription);
  
        },
        err => {
          console.log(err.message),
          this.message="Unable to add Prescription",
          this.prescriptionAdded=true;
          
        }
      );
    }    
}

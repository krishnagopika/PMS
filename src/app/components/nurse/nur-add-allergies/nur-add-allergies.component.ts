import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Allergy } from '../../../model/allergy';
import { NurseService } from 'src/app/service/nurse/nurse.service';

@Component({
  selector: 'app-nur-add-allergies',
  templateUrl: './nur-add-allergies.component.html',
  styleUrls: ['./nur-add-allergies.component.css']
})

export class NurAddAllergiesComponent {
  
  allergy = new FormControl('');
  allergies:any;
  allergyId:number[]=[];
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  ngOnInit(): void {
    this.form = this.fb.group({
      spec: [, [Validators.required]],
      dname: [,[Validators.required]],
      availFrom: ['',[Validators.required]],
      availTill: ['',[Validators.required]],
    })
  }
  form!: FormGroup;
  title!: string;
  availFrom!: Date;
  availTill!: Date;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<NurAddAllergiesComponent> , nurseService:NurseService) { 
      nurseService.getAllAlergies().subscribe(
        (data)=>{this.allergies=data, console.log(data)
        },
       
        err => {
          console.log(err.message)
        }
        );  
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.dialogRef.close(this.allergyId);
    } 
  
}

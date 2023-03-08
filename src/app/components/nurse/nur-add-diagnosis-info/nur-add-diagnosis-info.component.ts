import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { AdmDrScheduleNewComponent } from '../../admin/adm-dr-schedule-new/adm-dr-schedule-new.component';
import { NurAddAllergiesComponent } from '../nur-add-allergies/nur-add-allergies.component';
import { VisitDetails } from '../../../model/visit-details';
import { Patient } from '../../../model/patient';
import { Allergy } from '../../../model/allergy';
import { NurseService } from 'src/app/service/nurse/nurse.service';

@Component({
  selector: 'app-nur-add-diagnosis-info',
  templateUrl: './nur-add-diagnosis-info.component.html',
  styleUrls: ['./nur-add-diagnosis-info.component.css']
})
  

export class NurAddDiagnosisInfoComponent implements OnInit{
  appointment_id:number=history.state.appointment_id;
  currentDate = new Date();
  patient:Patient|undefined;
  message:any;
  check:boolean=true;
  allergy:number[]=[];
  patient_id:number=history.state.patient_id;
  allergyDisplay:Allergy[]=[];
  allergiesRetreived:Allergy[]=[];
  blood_group:string="";
  age:number=0;
  bp:string[]=[];
  allergies:Allergy=history.state.allergyId;
  visitDetailsRecorded:VisitDetails= new VisitDetails(0,0,0,0,0,0,0,"","",0,"",0,"",this.allergy,new Date);
  recorded:boolean=false;
  appointment_date:any;
  nurse_email:any;

  blood_pressure:string="";
  titleFormControl = new FormControl('', [Validators.required]);
  visitdetails:VisitDetails=new VisitDetails(0,0,0,0,0,0,0,"","",0,"",0,"",this.allergy,new Date);
  visitDetailsResponse:VisitDetails= new VisitDetails(0,this.patient_id,0,0,0,0,0,"","",0,"",history.state.appointment_id,"",this.allergy,new Date);
  form: any;
  constructor(public dialog: MatDialog,private nurseService:NurseService) {
    this.patient_id=history.state.patient_id;
    nurseService.getPatient(this.patient_id).subscribe(
      (data)=>{this.patient=data, console.log(data,this.patient_id);
        if(this.patient?.gender=='M'){
          this.patient.gender="Male"
        }
        if(this.patient?.gender=='F'){
          this.patient.gender="Female"
        }
        if(this.patient?.gender=='O'){
          this.patient.gender="Other"
        }
        if(this.patient?.dob!=undefined){
          const convertAge = new Date(this.patient?.dob);
          const timeDiff = Math.abs(Date.now() - convertAge.getTime());
          this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
          }
      },
      
      err => {
        console.log(err.message)
      }
      );
    this.appointment_id=history.state.appointment_id;
     
      nurseService.getRecentVisitDetails(this.patient_id).subscribe(
        (data)=>{this.visitdetails=data,this.patient_id=this.visitdetails.patient_id,this.blood_group=this.visitdetails.blood_group; this.allergy=this.visitdetails.allergy
           console.log(data, " ", this.allergy);},
       
        err => {
          console.log(err.message),
          this.message="Unable to load visit details",
          this.check=false;
        }
        );

      if(this.visitdetails.blood_group==""){
        this.check=true;
      }

      
        nurseService.getVisitDetails(this.appointment_id).subscribe(
          (data)=>{this.visitDetailsRecorded=data, console.log(data)
            if(this.visitDetailsRecorded!=undefined){
              this.recorded=!this.recorded;
            };
          },
         
          err => {
            console.log(err.message)
          }
          );
          nurseService.getAllAlergies().subscribe(
            (data)=>{this.allergiesRetreived=data, console.log("data",this.allergiesRetreived,this.visitdetails)
              for (let a of this.allergiesRetreived){
                if(this.visitdetails.allergy.includes(a.id))
                {
                  this.allergyDisplay.push(a)
                }
              }
            },
           
            err => {
              console.log(err.message)
            }
            );
          
         



  };
  saveInfo(){
    console.log(history.state.appointment_id, history.state.appointment_date);
   console.log(this.visitDetailsResponse.appointment_id)
    this.appointment_date= history.state.appointment_date;
    this.bp=this.blood_pressure.split('/');
    this.visitDetailsResponse.blood_pressure_systolic= Number(this.bp[0]);
    this.visitDetailsResponse.blood_pressure_diastolic= Number(this.bp[1]);
    this.visitDetailsResponse.blood_group=this.blood_group;
    this.visitDetailsResponse.date=this.appointment_date;
    this.visitDetailsResponse.physician_email=history.state.physician_email;
    this.visitDetailsResponse.patient_id=history.state.patient_id;
    this.nurse_email=sessionStorage.getItem('email');
    this.visitDetailsResponse.nurse_email=this.nurse_email;
    this.visitDetailsResponse.allergy=this.allergy;
    console.log(sessionStorage.getItem('email'));
    console.log(this.visitDetailsResponse);
    this.nurseService.createVisitDetails(this.visitDetailsResponse).subscribe(
      (data)=>{this.message="Visit Details Added Successfully",console.log(data);
    },
      err => {
        console.log(err.message),
        this.message="Unable to add details"
        console.log(this.visitDetailsResponse)
        ;
      }
    )


  }
  
  activatedroute:ActivatedRoute=new ActivatedRoute;

  ngOnInit(): void {
   
      
      

  };

bloodPressureFormControl = new FormControl('', [Validators.required]);
sugarFormControl = new FormControl('', [Validators.required]);
bodyTempFormControl = new FormControl('', [Validators.required]);
respirationRateFormControl = new FormControl('', [Validators.required]);
heightFormControl = new FormControl('', [Validators.required]);
weightFormControl = new FormControl('', [Validators.required]);
notesFormControl = new FormControl('', [Validators.required]);
matcher = new PatientRegistrationFormErrorStateMatcher();
 
openDialog1(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    title : 'Basic Diagnosis Info',
    buttonName: 'Save'
  }
  const dialogRef = this.dialog.open(NurAddAllergiesComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.allergy=data;
      console.log(data)});
}

}

export class PatientRegistrationFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

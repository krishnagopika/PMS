import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NurAddDiagnosisInfoComponent } from '../../nurse/nur-add-diagnosis-info/nur-add-diagnosis-info.component';
import { Appointment } from '../../../model/appointment';
import { PatientService } from 'src/app/service/patient/patient.service';
import { PhysicianAvailability } from 'src/app/model/physician-availability';

@Component({
  selector: 'app-patient-new-appointment',
  templateUrl: './patient-new-appointment.component.html',
  styleUrls: ['./patient-new-appointment.component.css']
})
export class PatientNewAppointmentComponent {
  submit:boolean=false;
  success:boolean=false;
  [x: string]: any;
  appointment:Appointment=new Appointment(0,"",new Date,"","Pending",0,"");
  id:any;
  message:any;
  appointmentDate: Date = new Date;
  AvaialblePhysicians:string[]=[];
 
  dname : string[] = [];
  speciality: string[]=[];
  ngOnInit(): void {
    this.form = this.fb.group({
      doctorname: [,[Validators.required]],
      date: ['',[Validators.required]],
      notes: ['',[Validators.required]],
      
    }
    )
    for(let physicianAvailability of this.AllPhysicianAvailabilities)
    {
      console.log(physicianAvailability.date, " ", this.appointment.date)
      if(physicianAvailability.date.includes(this.appointment.date)){
        this.AvaialblePhysicians.push(physicianAvailability.email);
      }
       
    }
    for(let email of this.AvaialblePhysicians){
      const one = email.split("@");
      const two = one[0].split(".");
      const name ="Dr "+ two[0] +" "+two[1] +"( "+two[2]+" )";
      this.dname.push(name);
      console.log(this.dname)

    }


    
    console.log(this.appointment)

  }
  searchDoctors(date:Date){

    console.log(date)
    this.AvaialblePhysicians=[];
    this.dname=[];

    for(let physicianAvailability of this.AllPhysicianAvailabilities)
    {
      console.log(physicianAvailability.date)
      console.log(this.appointmentDate.toDateString())
      if(physicianAvailability.date.includes(this.appointmentDate.toDateString())){
        this.AvaialblePhysicians.push(physicianAvailability.email);
        console.log(physicianAvailability.email)
        console.log(this.AvaialblePhysicians);
      }
       
    }
    for(let email of this.AvaialblePhysicians){
      const one = email.split("@");
      const two = one[0].split(".");
      const name ="Dr "+ two[0] +" "+two[1] +"( "+two[2]+" )";
      this.dname.push(name);
      console.log(this.dname)

    }
  }
  form!: FormGroup;
  title!: string;
  date!: Date;
  notes!: string;
  doctorname!:string;

  AllPhysicianAvailabilities:PhysicianAvailability[]=[];

  constructor(private patientService:PatientService, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<PatientNewAppointmentComponent>) { 

      dialogRef.disableClose = true;
      this.patientService.getAllPhysicianAvailabilities().subscribe(
        (data)=>{this.AllPhysicianAvailabilities=data,(console.log(data))
          for(let physicianAvailability of this.AllPhysicianAvailabilities)
          {
            console.log(physicianAvailability.date)
            console.log(this.appointmentDate.toDateString())
            if(physicianAvailability.date.includes(this.appointmentDate.toDateString())){
              this.AvaialblePhysicians.push(physicianAvailability.email);
              console.log(physicianAvailability.email)
            }
             
          }
          for(let email of this.AvaialblePhysicians){
            const one = email.split("@");
            const two = one[0].split(".");
            const name ="Dr "+ two[0] +" "+two[1] +"( "+two[2]+" )";
            this.dname.push(name);
            console.log(this.dname)
      
          };},
        err=>{
          console.log(console.log(err.message))

        }
      );
      
    }

    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.id =sessionStorage.getItem('patient_id');
      this.appointment.patientId=this.id;
      this.appointment.submissionDate=new Date();
     console.log(this.appointment)
     this.appointment.date=this.appointmentDate.toDateString();
     if(this.appointment.date!=null && this.appointment.physicianEmail!="" && this.appointment.reason!=""){
      this.patientService.createAppointment(this.appointment).subscribe(
        
        (data)=>{this.message="Appointment booked successfully",console.log(data),console.log(this.appointment.id),this.success=true;},
        err => {
          console.log(err.message),
          this.message="Unable to create an Appointment"
          ;
        }
        
        );
      }
      else{
        this.message="Enter all the mandatory fields"
        console.log("failed to book appointment")
      }
      this.submit=true;
      this.dialogRef.afterOpened();
      
    }    
}

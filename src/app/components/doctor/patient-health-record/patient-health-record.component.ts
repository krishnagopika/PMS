import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdmDrSheduleDelComponent } from '../../admin/adm-dr-shedule-del/adm-dr-shedule-del.component';
import { DrNewObservationComponent } from '../dr-new-observation/dr-new-observation.component';
import { NewPrescriptionDialogComponent } from '../new-prescription-dialog/new-prescription-dialog.component';
import { ViewPrescriptionDialogComponent } from '../view-prescription-dialog/view-prescription-dialog.component';
import { DoctorService } from 'src/app/service/doctor/doctor.service';
import { Allergy } from 'src/app/model/allergy';
import { HealthRecord } from 'src/app/model/health-record';
import { DrUpdateObservationComponent } from '../dr-update-observation/dr-update-observation.component';
import { Router } from '@angular/router';
import { HealthInfoComponent } from '../../common/health-info/health-info.component';

@Component({
  selector: 'app-patient-health-record',
  templateUrl: './patient-health-record.component.html',
  styleUrls: ['./patient-health-record.component.css']
})
export class PatientHealthRecordComponent  implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name',  'result', 'action'];
  dataSource: any;
  visitdetails:any;
  patient_id:number=history.state.patient_id;
  appointment_id=history.state.appointment_id;
  patient:any;
  allergy:Allergy[]=[];
  allergiesRetreived:any;
  key_notes="";
  age:number=0;
  check=false;
  reason=history.state.reason;
  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();
  healthRecord:any;
  tests:any;
  prescription:any;
  visit_details_id:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private doctorService:DoctorService, private router: Router) {
    console.log(this.reason, this.patient_id);
    this.patient_id=history.state.patient_id;
    
    doctorService.getPatient(this.patient_id).subscribe(
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
     
      doctorService.getHealthRecordByAppointmnetId(this.appointment_id).subscribe(
        (data)=>{this.visitdetails=data,
           console.log(this.visitdetails, " ", this.allergy),this.visit_details_id=this.visitdetails.visitDetails_id, this.check=false,console.log("id:",this.visit_details_id,this.visitdetails.visitDetails_id),this.key_notes=this.visitdetails.key_notes,this.patient_id=this.visitdetails.patient_id,
           doctorService.getTest(this.visit_details_id).subscribe(
            (data)=>{
              this.tests=data
              console.log(this.tests), this.dataSource=new MatTableDataSource(this.tests);
            },
            err => {
              console.log(err.message)
              
            }
          );
           ;
          },
       
        err => {
          console.log(err.message),
          this.check=true;
        }
        );
        
     
        doctorService.getAllAlergies().subscribe(
          (data)=>{this.allergiesRetreived=data, console.log("data",this.allergiesRetreived,this.visitdetails)
            for (let a of this.allergiesRetreived){
              if(this.visitdetails.allergy.includes(a.id))
              {
                this.allergy.push(a)
              }
            }
            console.log(this.allergy)
          },
         
          err => {
            console.log(err.message)
          }
          );
          
} 
newTest() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    "visit_details_id": this.visit_details_id
  }
  const dialogRef = this.dialog.open(DrNewObservationComponent, dialogConfig);
}
editTest(id:number) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    "visit_details_id": this.visit_details_id,
    "test_id":id
  }
  const dialogRef = this.dialog.open(DrUpdateObservationComponent, dialogConfig);
}
addPrescription() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    "visit_details_id": this.visit_details_id
  }
  const dialogRef = this.dialog.open(NewPrescriptionDialogComponent, dialogConfig);
}

viewPrescription() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    "visit_details_id": this.visit_details_id

  }
  const dialogRef = this.dialog.open(ViewPrescriptionDialogComponent, dialogConfig);
}
updateVisitDetails(){
  this.visitdetails.key_notes=this.key_notes;
  this.doctorService.updateVisitDetails(this.visitdetails).subscribe(
    (data)=>{this.key_notes=data.key_notes,console.log(data);
    },
    err=>{
      console.log(err.message);

    }
  );


  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  closeDialog(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdmDrSheduleDelComponent, dialogConfig);
  }
  deleteTest(id:number){
    this.doctorService.deleteTest(id).subscribe(
      (data)=>{
        console.log(data);
      },
      err=>{
          console.log(err.message)
      }
    )
  }
  onNavToHealthRecords() {
    console.log( "Hello",this.patient_id)
    this.router.navigate([HealthInfoComponent], { state: {patientId: this.patient_id} });
 }
  
}





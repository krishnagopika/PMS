import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common'
import { ViewPrescriptionDialogComponent } from '../../doctor/view-prescription-dialog/view-prescription-dialog.component';
import { DoctorService } from 'src/app/service/doctor/doctor.service';
import { HealthRecord } from 'src/app/model/health-record';




@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.css']
})



export class HealthInfoComponent {
  healthRecords:any;
  patient_id:number=history.state.patient_id;
  recent_health_record:any;
  patient:any;
  age:number=0;
  displayedColumns: string[] = ['id', 'name',  'result'];


  constructor(public dialog: MatDialog, private location: Location, doctorService:DoctorService) {
    
    this.patient_id=history.state.patient_id;
    console.log(history.state.patient_id, " i", this.patient_id)
    doctorService.getPatientHealthRecords(this.patient_id).subscribe(
      (data)=>{
        this.healthRecords=data,console.log(this.healthRecords),console.log(this.healthRecords.tests), this.recent_health_record=this.healthRecords[0];
      },
      err=>{
        console.log(err.message);
      }
    )
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
    )
    
} 

  back(): void{
    this.location.back();
  }
  openDialog2() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    dialogConfig.data = {
    }
    const dialogRef = this.dialog.open(ViewPrescriptionDialogComponent, dialogConfig);
  }
  viewPrescription(visit_details_id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      "visit_details_id": visit_details_id
  
    }
    const dialogRef = this.dialog.open(ViewPrescriptionDialogComponent, dialogConfig);
  }
}



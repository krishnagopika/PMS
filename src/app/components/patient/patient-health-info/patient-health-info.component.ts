import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common'
import { ViewPrescriptionDialogComponent } from '../../common/view-prescription-dialog/view-prescription-dialog.component';
import { HealthRecord } from '../../../model/health-record';
import { HealthRecordService } from '../../../service/health-record/health-record.service';


@Component({
  selector: 'app-patient-health-info',
  templateUrl: './patient-health-info.component.html',
  styleUrls: ['./patient-health-info.component.css']
})
export class PatientHealthInfoComponent  implements AfterViewInit{

  healthrecords: HealthRecord[]|undefined;
  patient_id:any;
  message:any;
  displayedColumns: string[] = ['id', 'test', 'Result'];
  dataSource: any;
  recentHealthRecord:HealthRecord|undefined;
  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private location: Location, healthrecordService:HealthRecordService) {
    this.patient_id=sessionStorage.getItem('patient_id');
    healthrecordService.getPatientHealthRecords(this.patient_id).subscribe(
      (data)=>{this.healthrecords=data, console.log(data,this.patient_id),
        this.dataSource=new MatTableDataSource(this.healthrecords),console.log(data)
        ;
      },
     
      err => {
        console.log(err.message),
        this.message="unable to load health records"
      }
      );
      if(this.healthrecords!=undefined){
        this.recentHealthRecord=this.healthrecords[0];
      }
    
} 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}
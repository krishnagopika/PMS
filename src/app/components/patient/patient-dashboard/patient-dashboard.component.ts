import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdmDrScheduleNewComponent } from '../../admin/adm-dr-schedule-new/adm-dr-schedule-new.component';
import { PatientNewAppointmentComponent } from '../patient-new-appointment/patient-new-appointment.component';
import { PatientService } from '../../../service/patient/patient.service';
import { Patient } from '../../../model/patient';
import { Appointment } from '../../../model/appointment';


const NAMES: string[] = [
  'Maia (Allergists)',    'Asher (Cardiologists)',    'Olivia (Orthologist)',    'Atticus (Psychiatrist)',    'Amelia (Gynecologist)',    'Jack (Dermatologist)',    'Charlotte (Endocrinologist)',    'Theodore (Gastroenterologist)',    'Isla (Hematologist)',    'Oliver (Nephrologist)',    'Isabella (Neurologist)',    'Jasper (Oncologist)',    'Cora (Opthalmologist)',    'Levi (Pathologist)',    'Violet (Plastic Surgeon)',    'Arthur (Pulmonologist)',    'Mia (Urologist)',    'Thomas (General Surgeon)',    'Elizabeth (Emergency Medicine Specialist)',
];
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit{

  dataSource:any;
  appointments:Appointment[]|undefined;
  patientName='';
  pattient_id:any;
  message:any;
  currentDate = new Date();
  displayedColumns: string[] = ['id', 'date', 'physicianEmail', 'reason', 'acceptance'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,patientService:PatientService) {

    console.log(sessionStorage.getItem('patientName'))
    this.pattient_id=sessionStorage.getItem('patient_id');
    patientService.getPatientAppointments(this.pattient_id).subscribe(
      (data)=>{this.appointments=data, console.log(data,this.pattient_id),
        this.dataSource=new MatTableDataSource(this.appointments),console.log();
      },
     
      err => {
        console.log(err.message),
        this.message="unable to load appointments"
      }
      );
} 
ngOnInit() {
  this.patientName = sessionStorage.getItem('patientName') as string;

}
openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    patient_id: this.pattient_id
  }
  const dialogRef = this.dialog.open(PatientNewAppointmentComponent, dialogConfig);
}
  
}
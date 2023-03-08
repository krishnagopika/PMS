import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AppointmentConfirmDialogComponent } from '../appointment-confirm-dialog/appointment-confirm-dialog.component';
import { AdmDrSheduleDelComponent } from '../../admin/adm-dr-shedule-del/adm-dr-shedule-del.component';
import { FormControl, Validators } from '@angular/forms';
import { Appointment } from 'src/app/model/appointment';
import { DoctorService } from 'src/app/service/doctor/doctor.service';



@Component({
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.component.html',
  styleUrls: ['./dr-appointment.component.css']
})
export class DrAppointmentComponent {
  dobFormControl = new FormControl('', [Validators.required]);
  currentDate = new Date();
  displayedColumns: string[] = ['id', 'patient_id', 'submissionDate', 'reason', 'action'];
  dataSource: any;
  email:any;
  appointments:Appointment[]=[];
  acceptance="Pending";
  searchDate:any;
  date="";
  message="";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private doctorService:DoctorService) {
    this.date=this.currentDate.toDateString();
    this.email=sessionStorage.getItem('email');
    const one = this.email.split("@");
    const two = one[0].split(".");
    const name ="Dr "+two[0]+" "+two[1]+"( "+two[2]+" )";
    this.email=name;
    
    console.log(this.email)
   this.doctorService.getAllAppointments(this.email,this.date,this.acceptance).subscribe(
    (date)=>{
      this.appointments=date, console.log(this.appointments), this.dataSource = new MatTableDataSource(this.appointments);
    },
    err=>{
      console.log(err.message);
    }
   )
  }


  acceptAppointment(appointmentId:number) {
    const acceptance="Accepted";
    this.doctorService.updateAppointment(appointmentId,acceptance).subscribe(
      (data)=>{
        console.log(data),
        this.message= " Appointment Accepted",
        this.dialog.open(AppointmentConfirmDialogComponent, {
          data: this.message});
      },
      err=>{
        console.log(err.message),
        this.message="Unable to Accept the Appointment",
        this.dialog.open(AppointmentConfirmDialogComponent, {
          data: this.message});

      }
    )

   
  }
  rejectAppointment(appointmentId:number){
    const acceptance="Rejected";
    this.doctorService.updateAppointment(appointmentId,acceptance).subscribe(
      (data)=>{
        console.log(data),
        this.message= " Appointment Rejected",
        this.dialog.open(AppointmentConfirmDialogComponent, {
          data: this.message});
      },
      err=>{
        console.log(err.message),
        this.message="Unable to Reject the Appointment",
        this.dialog.open(AppointmentConfirmDialogComponent, {
          data: this.message});

      }
    )
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  searchAppointments(searchDate:Date){
    this.email=sessionStorage.getItem('email');
    this.date=searchDate.toDateString();
    const one = this.email.split("@");
    const two = one[0].split(".");
    const name ="Dr "+two[0]+" "+two[1]+"( "+two[2]+" )";
    this.email=name;
    
    console.log(this.email)
   this.doctorService.getAllAppointments(this.email,searchDate.toDateString(),this.acceptance).subscribe(
    (date)=>{
      this.appointments=date, console.log(this.appointments), this.dataSource = new MatTableDataSource(this.appointments);
    },
    err=>{
      console.log(err.message);
    }
   )

  }
}

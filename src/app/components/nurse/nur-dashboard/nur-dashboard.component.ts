import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../../../model/appointment';
import { AppointmentService } from '../../../service/appointment/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-nur-dashboard',
  templateUrl: './nur-dashboard.component.html',
  styleUrls: ['./nur-dashboard.component.css'],
})
export class NurDashboardComponent implements OnInit{
  dataSource:any;
  appointments:Appointment[]|undefined;
  message:any;
  currentDate = new Date();
  acceptance:string="Accepted";
  displayedColumns: string[] = ['id','patientId', 'submissionDate','physicianEmail', 'reason','action'];



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, appointmentService:AppointmentService) {
    console.log(this.currentDate.toDateString());
    appointmentService.getAcceptedAppointments(this.acceptance,this.currentDate).subscribe(
      (data)=>{this.appointments=data, console.log(data),
        this.dataSource=new MatTableDataSource(this.appointments),console.log(this.currentDate);
      },
     
      err => {
        console.log(err.message),
        this.message="unable to load appointments"
      }
      );
} 

  ngOnInit(): void{
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
  acitivatedroute: ActivatedRoute= new ActivatedRoute;

}

@Component({
  selector: 'dialog-elements-example-dialog',
  template: `
    <h1 mat-dialog-title>Appointment Confirmation</h1>
    <div mat-dialog-content>The selected patient's appointment is confirmed now.</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>`,
})
export class AppointmentConfirmDialog {
}
/** Builds and returns a new User. */

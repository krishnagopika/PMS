import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Appointment } from 'src/app/model/appointment';
import { DoctorService } from 'src/app/service/doctor/doctor.service';



/** Constants used to fill up our data base. */


@Component({
  selector: 'app-dr-dashboard',
  templateUrl: './dr-dashboard.component.html',
  styleUrls: ['./dr-dashboard.component.css']
})
export class DrDashboardComponent implements AfterViewInit {
  currentDate= new Date();
  dobFormControl = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['id', 'patientId','date', 'reason', 'action'];
  dataSource: any;
  today:Date=new Date;
  date : string=this.today.toDateString();
  email:any;
  appointments:Appointment[]=[];
  message:string="No Appointments to Display";
  acceptance="Accepted";

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private doctorService:DoctorService) {
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

  openDial(){
    
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
}

/** Builds and returns a new User. */
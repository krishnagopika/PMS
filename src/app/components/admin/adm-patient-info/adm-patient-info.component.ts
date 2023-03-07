import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../../../model/patient';
import { PatientService } from '../../../service/patient/patient.service';
import { AdminService } from 'src/app/service/admin/admin.service';
export interface UserData {
  id: string;
  name: string;
  email: string;
  contact: string;
}
@Component({
  selector: 'app-adm-patient-info',
  templateUrl: './adm-patient-info.component.html',
  styleUrls: ['./adm-patient-info.component.css']
})
export class AdmPatientInfoComponent {
  displayedColumns: string[] = ['id','name', 'email', 'contact'];
  dataSource: any;
  patients!:Patient[];
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(adminService:AdminService) {
    adminService.getAllPatients().subscribe(
      (data)=>{this.patients=data, console.log(data), this.dataSource = new MatTableDataSource(this.patients);
      },
     
      err => {
        console.log(err.message)
      }
      );
    
   
    console.log(this.dataSource)
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


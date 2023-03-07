import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdmDrScheduleNewComponent } from '../adm-dr-schedule-new/adm-dr-schedule-new.component';
import { AdmDrSheduleDelComponent } from '../adm-dr-shedule-del/adm-dr-shedule-del.component';
import { PhysicianAvailability } from 'src/app/model/physician-availability';
import { AdminService } from 'src/app/service/admin/admin.service';
import { AdmDrScheduleUpdateComponent } from '../adm-dr-schedule-update/adm-dr-schedule-update.component';


@Component({
  selector: 'app-adm-dr-schedule',
  templateUrl: './adm-dr-schedule.component.html',
  styleUrls: ['./adm-dr-schedule.component.css']
})
export class AdmDrScheduleComponent  implements AfterViewInit{
  currentDate = new Date();
  displayedColumns: string[] = ['id', 'email','date','action'];
  dataSource: any;
  email:any;
  date:any;
  id:any;
  physicianAvailability : PhysicianAvailability=new PhysicianAvailability(0,"",[],false);
  AllPhysicianAvailabilities:PhysicianAvailability[]=[];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private adminService:AdminService) {
    this.adminService.getAllPhysicianAvailabilities().subscribe(
        (data)=>{this.AllPhysicianAvailabilities=data,(console.log(data)),this.dataSource = new MatTableDataSource(this.AllPhysicianAvailabilities);},
        err=>{
          console.log(console.log(err.message))

        }
      );
    
} 
openDialogNew() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    title : 'Basic Diagnosis Info',
    buttonName: 'Save'
  }

  const dialogRef = this.dialog.open(AdmDrScheduleNewComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.physicianAvailability=data;
      console.log(data),
      this.adminService.createPhysicianAvailability(this.physicianAvailability).subscribe(
        (data)=>{(console.log(data));},
        err=>{
          console.log(console.log(err.message))

        }
      );},
      err=>{
        console.log(console.log(err.message))

      })

}
openDialogUpdate(email: string,id: number,date: string[]) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  const physicianAv:PhysicianAvailability= new PhysicianAvailability(id,email,date,true);
  console.log(physicianAv)
  dialogConfig.data = {
    title : 'Basic Diagnosis Info',
    buttonName: 'Save',
    physicianAvailability:physicianAv
  }
 
  const dialogRef = this.dialog.open(AdmDrScheduleUpdateComponent,dialogConfig);
  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.physicianAvailability=data;
      console.log(data),
      this.adminService.updatePhysicianAvailability(this.physicianAvailability, physicianAv.id).subscribe(
        (data)=>{(console.log(data));},
        err=>{
          console.log(console.log(err.message))

        }
      );},
      err=>{
        console.log(console.log(err.message))

      })
  
}
deleteDialog(id:number){
  this.adminService.deletePhysicianAvailability(id).subscribe(
    (data)=>{(console.log(data));},
    err=>{
      console.log(console.log(err.message))

    }
  )

}

closeDialog(){
  const dialogConfig = new MatDialogConfig();
  const dialogRef = this.dialog.open(AdmDrSheduleDelComponent,{
    data: { physicianAvailability: this.physicianAvailability }
  } );
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



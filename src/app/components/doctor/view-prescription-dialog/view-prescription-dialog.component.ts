import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common'
import { DoctorService } from 'src/app/service/doctor/doctor.service';



@Component({
  selector: 'app-view-prescription-dialog',
  templateUrl: './view-prescription-dialog.component.html',
  styleUrls: ['./view-prescription-dialog.component.css']
})
export class ViewPrescriptionDialogComponent {
  displayedColumns: string[] = ['id','name', 'dosage'];
  dataSource:any;
  prescription:any;
  visit_details_id:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private dialogRef : MatDialogRef<ViewPrescriptionDialogComponent>,@Inject(MAT_DIALOG_DATA) data : any, private doctorService:DoctorService) {
    this.visit_details_id=data.visit_details_id;
    doctorService.getPrescription(this.visit_details_id).subscribe(
      (data)=>{
        this.prescription=data
        console.log(this.prescription), this.dataSource=new MatTableDataSource(this.prescription);
      },
      err => {
        console.log(err.message)
        
      }
    );

} 
back(): void{
  this.dialogRef.close();
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

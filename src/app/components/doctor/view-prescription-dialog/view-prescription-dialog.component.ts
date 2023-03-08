import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common'



export interface UserData {
  id: string;
  name: string;
  email: string;
  contact: string;
}
const CON: string[] = [
  'After food',
  'Before food',
  'Before sleep',
  'After workout',
  'Before workout',
  'During workout',
  'During food',
  'After bath',
  'Before bath',
  'During pain',
  'After checkup',
  'Before consultation'
];
const NAMES: string[] = [
  'Ear drops',
  'Eye drops',
  'Cough syrup',
  'Paracetomol',
  'Dolo',
  'Betadin',
  'Volini',
  'Vicks',
  'Ranbaxy',
  'Crocin',
  'Strepsils',
  'Painkiller',
];
const EMAIL: string[] = [
  '0-0-1',
  '0-1-0',
  '1-0-0',
  '0-1-1',
  '1-0-1',
  '1-1-0',
  '1-1-1',
  '0-2-1',
  '0-1-2',
  '2-0-1',
  '2-1-1',
  '2-2-0'

];
@Component({
  selector: 'app-view-prescription-dialog',
  templateUrl: './view-prescription-dialog.component.html',
  styleUrls: ['./view-prescription-dialog.component.css']
})
export class ViewPrescriptionDialogComponent {
  displayedColumns: string[] = ['id','name', 'email', 'contact'];
  dataSource: MatTableDataSource<UserData>;
  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private dialogRef : MatDialogRef<ViewPrescriptionDialogComponent>) {
    // Create 100 use
    const users = Array.from({length:10}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id.toString(),
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    name: name,
    contact: CON[Math.round(Math.random() * (CON.length - 1))]
  };
}

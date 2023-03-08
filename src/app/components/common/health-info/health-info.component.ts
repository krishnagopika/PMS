import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '@angular/common'
import { ViewPrescriptionDialogComponent } from '../../doctor/view-prescription-dialog/view-prescription-dialog.component';


export interface UserData {
  id: string;
  testConducted: string;
  expectedResult: string;
  actualResult: string;
  status: string;
  remarks: string;
}
const NOTES: string[] = [
  'Ear',
  'Nose',
  'Throat',
  'Eyes',
  'Bones',
  'Brain',
  'Muscle',
  'Brain',
  'Stomach',
  'Lungs',
  'Kidney'
];

const RE: string[] = [
  'Poor',
  'Below Average',
  'Average',
  'Above Average',
  'Better',
  'Good',
  'Early',
  'In Progress',
  'Rehab',
  'Time taking',
  'Above Average',
  'Better',
  'Good',
  'Early',
  'In Progress',
  'Rehab',
  'Time taking',
  'Bed Rest',
  'On medication'
];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla'
];

@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.css']
})



export class HealthInfoComponent  implements AfterViewInit{
  displayedColumns: string[] = ['id', 'testConducted', 'actualResult', 'status', 'remarks'];
  dataSource: MatTableDataSource<UserData>;
  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private location: Location) {
    // Create 100 users
    const users = Array.from({length: 5}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    testConducted: NOTES[Math.round(Math.random() * (NOTES.length - 1))],
    expectedResult: name,
    actualResult: name,
    status: RE[Math.round(Math.random() * (NOTES.length - 1))],
    remarks: RE[Math.round(Math.random() * (NOTES.length - 1))]
  };
}

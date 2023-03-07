import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdmDrSheduleDelComponent } from '../../admin/adm-dr-shedule-del/adm-dr-shedule-del.component';
import { DrNewObservationComponent } from '../../doctor/dr-new-observation/dr-new-observation.component';
import { NewPrescriptionDialogComponent } from '../../doctor/new-prescription-dialog/new-prescription-dialog.component';
import { ViewPrescriptionDialogComponent } from '../../common/view-prescription-dialog/view-prescription-dialog.component';

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
  'Kidney',
  'Liver',
  'Heart',
  'Nerves'
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
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-patient-health-record',
  templateUrl: './patient-health-record.component.html',
  styleUrls: ['./patient-health-record.component.css']
})
export class PatientHealthRecordComponent  implements AfterViewInit{
  displayedColumns: string[] = ['id', 'testConducted',  'actualResult', 'status', 'remarks', 'action'];
  dataSource: MatTableDataSource<UserData>;

  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 5}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
} 
openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
  }
  const dialogRef = this.dialog.open(DrNewObservationComponent, dialogConfig);
}
openDialog1() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
  }
  const dialogRef = this.dialog.open(NewPrescriptionDialogComponent, dialogConfig);
}

openDialog2() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
  }
  const dialogRef = this.dialog.open(ViewPrescriptionDialogComponent, dialogConfig);
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  closeDialog(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdmDrSheduleDelComponent, dialogConfig);
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

import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AppointmentConfirmDialogComponent } from '../appointment-confirm-dialog/appointment-confirm-dialog.component';
import { AdmDrSheduleDelComponent } from '../../admin/adm-dr-shedule-del/adm-dr-shedule-del.component';
import { FormControl, Validators } from '@angular/forms';


export interface BookedAppointment {
  id: string;
  name: string;
  booked: string;
  notes: string;
  action: string;
}

/** Constants used to fill up our data base. */
const NOTES: string[] = [
  'Acne is a common skin condition that affects most people at some point. It causes spots, oily skin and sometimes skin that\'s hot or painful to touch.',
  'Arthritis is a common condition that causes pain and inflammation in a joint.',
  'Cirrhosis is scarring of the liver caused by continuous, long-term liver damage.',
  'A coma is a state of unconsciousness where a person is unresponsive and cannot be woken.',
  'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you\'ll usually begin to feel better within about a week.',
  'Food poisoning is an illness caused by eating contaminated food. It\'s not usually serious and most people get better within a few days without treatment.',
  'Hyperhidrosis is a common condition in which a person sweats excessively',
  'Measles is a highly infectious viral illness that can be very unpleasant and sometimes lead to serious complications. It\'s now uncommon in the UK because of the effectiveness of vaccination.',
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
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.component.html',
  styleUrls: ['./dr-appointment.component.css']
})
export class DrAppointmentComponent {
  dobFormControl = new FormControl('', [Validators.required]);
  currentDate = new Date();
  displayedColumns: string[] = ['id', 'name', 'booked', 'notes', 'action'];
  dataSource: MatTableDataSource<BookedAppointment>;

  today: string = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
  today1: string = (new Date().getDate()+1) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
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
    this.dialog.open(AppointmentConfirmDialogComponent);
  }
  closeDialog(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdmDrSheduleDelComponent, dialogConfig);
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
function createNewUser(id: number): BookedAppointment {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    // booked: new Date(new Date().getTime() + (Math.round(Math.random() * 100) * 24 * 60 * 60 * 1000)).toString(),
    booked: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
    notes: NOTES[Math.round(Math.random() * (NOTES.length - 1))],
    action: 'Confirm'
  };
}

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  booked: string;
  notes: string;
  info: string;
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
const DATE: string[] =[
  "2019-10-15T18:30:00.000Z",
  "2019-10-15T18:30:00.000Z",
  "2019-10-15T18:30:00.000Z",
  "2019-10-15T18:30:00.000Z"

];

@Component({
  selector: 'app-dr-dashboard',
  templateUrl: './dr-dashboard.component.html',
  styleUrls: ['./dr-dashboard.component.css']
})
export class DrDashboardComponent implements AfterViewInit {
  currentDate= new Date();
  dobFormControl = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['id', 'name', 'booked', 'notes', 'info', 'action'];
  dataSource: MatTableDataSource<UserData>;

  today: string = new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 5}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    // booked: new Date(new Date().getTime() + (Math.round(Math.random() * 100) * 24 * 60 * 60 * 1000)).toString(),
    booked:DATE[Math.round(Math.random() * (DATE.length - 1))],
    notes: NOTES[Math.round(Math.random() * (NOTES.length - 1))],
    info: NOTES[Math.round(Math.random() * (NOTES.length - 1))],
    action: 'Update'
  };
}

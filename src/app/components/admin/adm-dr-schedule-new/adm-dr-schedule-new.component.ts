import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhysicianAvailability } from 'src/app/model/physician-availability';


@Component({
  selector: 'app-adm-dr-schedule-new',
  templateUrl: './adm-dr-schedule-new.component.html',
  styleUrls: ['./adm-dr-schedule-new.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AdmDrScheduleNewComponent {
  emailFormControl = new FormControl('', [Validators.required]);
  matcher = new BookAppointmentErrorStateMatcher();

 
 
  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     dname: [,[Validators.required]],
  //     availFrom: ['',[Validators.required]],
  //     availTill: ['',[Validators.required]]
  //   })
  // }
  // form!: FormGroup;
  // title!: string;
  // availFrom!: Date;
  // availTill!: Date;
  selectedDates: string[] = [];
  physicianAvailability : PhysicianAvailability=new PhysicianAvailability(0,"",[],false);
  email="";

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view == 'month') {
      let dateToFind = this.getDateOnly(cellDate)
      let i = this.selectedDates.indexOf(dateToFind)
      if (i >= 0) {
        return 'selected'
      }
    }
    return ''
  }

  
  daySelected(date: Date | null,calendar: any) {
    if (date) {
      let dateSelected = date.toDateString();
      let i = this.selectedDates.indexOf(dateSelected)
      if (i >= 0) {
        this.selectedDates.splice(i,1)
      } else {
        this.selectedDates.push(dateSelected)
      }
      calendar.updateTodaysDate();
    }
    
  }

  getDateOnly(date: Date):string {
    return date.toISOString().split('T')[0];
  }

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AdmDrScheduleNewComponent>) { 
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.physicianAvailability.availability=true;
      this.physicianAvailability.date=this.selectedDates;
      this.physicianAvailability.email=this.email;
      console.log(this.physicianAvailability)
      this.dialogRef.close(this.physicianAvailability);
    }    
}
export class BookAppointmentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

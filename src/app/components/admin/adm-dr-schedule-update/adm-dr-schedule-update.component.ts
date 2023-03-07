import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmDrScheduleNewComponent } from '../adm-dr-schedule-new/adm-dr-schedule-new.component';
import { AdminService } from 'src/app/service/admin/admin.service';
import { PhysicianAvailability } from 'src/app/model/physician-availability';

@Component({
  selector: 'app-adm-dr-schedule-update',
  templateUrl: './adm-dr-schedule-update.component.html',
  styleUrls: ['./adm-dr-schedule-update.component.css']
})
export class AdmDrScheduleUpdateComponent {
  emailFormControl = new FormControl('', [Validators.required]);
  matcher = new DrScheduleErrorStateMatcher();
  
  physicianEmail="";
  selectedDates: string[] = []
 private physicianAvaialbility:any;

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
      let dateSelected = this.getDateOnly(date)
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
      this.physicianAvaialbility=data.physicianAvailability;
      this.selectedDates=this.physicianAvaialbility.date;
      console.log(this.physicianAvaialbility) 
    }
    resetinfo(){
      this.dialogRef.close();
    }
    saveinfo(){
      this.physicianAvaialbility.date=this.selectedDates;
      console.log(this.physicianAvaialbility)
      this.dialogRef.close(this.physicianAvaialbility);
    }    
}
export class DrScheduleErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

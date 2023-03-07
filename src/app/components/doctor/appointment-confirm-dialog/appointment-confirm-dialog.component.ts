import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component';

@Component({
  selector: 'app-appointment-confirm-dialog',
  templateUrl: './appointment-confirm-dialog.component.html',
  styleUrls: ['./appointment-confirm-dialog.component.css']
})
export class AppointmentConfirmDialogComponent {
  message="";
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<DialogComponent>){
    this.message=data;

  }

}

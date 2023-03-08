import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PatientLoginComponent} from './components/patient/patient-login/patient-login.component';
import {PatientRegistrationComponent} from './components/patient/patient-registration/patient-registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {DashboardComponent} from './components/common/dashboard/dashboard.component';
import {PreloginToolbarComponent} from './components/common/prelogin-toolbar/prelogin-toolbar.component';
import {PostloginToolbarComponent} from './components/common/postlogin-toolbar/postlogin-toolbar.component';
import {AuthModule} from "@auth0/auth0-angular";
import { DrDashboardComponent } from './components/doctor/dr-dashboard/dr-dashboard.component';
import { DrAppointmentComponent } from './components/doctor/dr-appointment/dr-appointment.component';
import { NurDashboardComponent } from './components/nurse/nur-dashboard/nur-dashboard.component';
import { AdmDashboardComponent } from './components/admin/adm-dashboard/adm-dashboard.component';
import { AdmDrScheduleComponent } from './components/admin/adm-dr-schedule/adm-dr-schedule.component';
import { AdmPatientInfoComponent } from './components/admin/adm-patient-info/adm-patient-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AdmDrScheduleNewComponent } from './components/admin/adm-dr-schedule-new/adm-dr-schedule-new.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PatientNewAppointmentComponent } from './components/patient/patient-new-appointment/patient-new-appointment.component';
import { PatientHealthInfoComponent } from './components/patient/patient-health-info/patient-health-info.component';
import { PostloginToolbarPatientComponent } from './components/patient/postlogin-toolbar-patient/postlogin-toolbar-patient.component';
import { AdmDrSheduleDelComponent } from './components/admin/adm-dr-shedule-del/adm-dr-shedule-del.component';
import { PatientHealthRecordComponent } from './components/doctor/patient-health-record/patient-health-record.component';
import { AppointmentConfirmDialogComponent } from './components/doctor/appointment-confirm-dialog/appointment-confirm-dialog.component';
import { NurAddDiagnosisInfoComponent } from './components/nurse/nur-add-diagnosis-info/nur-add-diagnosis-info.component';
import { NurAddAllergiesComponent } from './components/nurse/nur-add-allergies/nur-add-allergies.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DrNewObservationComponent } from './components/doctor/dr-new-observation/dr-new-observation.component';
import { HealthInfoComponent } from './components/common/health-info/health-info.component';
import { NewPrescriptionDialogComponent } from './components/doctor/new-prescription-dialog/new-prescription-dialog.component';
import { ViewPrescriptionDialogComponent } from './components/doctor/view-prescription-dialog/view-prescription-dialog.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { AdminProfileComponent } from './components/common/admin-profile/admin-profile.component';
import { PatientForgotPasswordComponent } from './components/patient/patient-forgot-password/patient-forgot-password.component';
import { PatientResetPasswordComponent } from './components/patient/patient-reset-password/patient-reset-password.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdmDrScheduleUpdateComponent } from './components/admin/adm-dr-schedule-update/adm-dr-schedule-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    PatientRegistrationComponent,
    DashboardComponent,
    PreloginToolbarComponent,
    PostloginToolbarComponent,
    DrDashboardComponent,
    DrAppointmentComponent,
    NurDashboardComponent,
    AdmDashboardComponent,
    AdmDrScheduleComponent,
    AdmPatientInfoComponent,
    AdmDrScheduleNewComponent,
    PatientDashboardComponent,
    PatientNewAppointmentComponent,
    PatientHealthInfoComponent,
    PostloginToolbarPatientComponent,
    AdmDrSheduleDelComponent,
    PatientHealthRecordComponent,
    AppointmentConfirmDialogComponent,
    NurAddDiagnosisInfoComponent,
    NurAddAllergiesComponent,
    DrNewObservationComponent,
    HealthInfoComponent,
    NewPrescriptionDialogComponent,
    ViewPrescriptionDialogComponent,
    PatientProfileComponent,
    AdminProfileComponent,
    PatientForgotPasswordComponent,
    PatientResetPasswordComponent,
    AdmDrScheduleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatTooltipModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-165wmi84jotwru21.us.auth0.com',
      clientId: 'GF3NiX1GHsGuzChVHpDxXifhppy9kqYk',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/dashboard'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

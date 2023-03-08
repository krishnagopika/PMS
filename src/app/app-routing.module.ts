import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PatientLoginComponent} from "./components/patient/patient-login/patient-login.component";
import {PatientRegistrationComponent} from "./components/patient/patient-registration/patient-registration.component";
import {DashboardComponent} from "./components/common/dashboard/dashboard.component";
import {AuthGuard} from "@auth0/auth0-angular";
import {DrDashboardComponent} from "./components/doctor/dr-dashboard/dr-dashboard.component";
import {NurDashboardComponent} from "./components/nurse/nur-dashboard/nur-dashboard.component";
import {AdmDashboardComponent} from "./components/admin/adm-dashboard/adm-dashboard.component";
import {DrAppointmentComponent} from "./components/doctor/dr-appointment/dr-appointment.component";
import {AdmDrScheduleComponent} from "./components/admin/adm-dr-schedule/adm-dr-schedule.component";
import {AdmPatientInfoComponent} from "./components/admin/adm-patient-info/adm-patient-info.component";
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PatientHealthInfoComponent } from './components/patient/patient-health-info/patient-health-info.component';
import { AdmDrScheduleNewComponent } from './components/admin/adm-dr-schedule-new/adm-dr-schedule-new.component';
import { NurAddDiagnosisInfoComponent } from './components/nurse/nur-add-diagnosis-info/nur-add-diagnosis-info.component';
import { PatientHealthRecordComponent } from './components/doctor/patient-health-record/patient-health-record.component';
import { HealthInfoComponent } from './components/common/health-info/health-info.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { AdminProfileComponent } from './components/common/admin-profile/admin-profile.component';
import { PatientForgotPasswordComponent } from './components/patient/patient-forgot-password/patient-forgot-password.component';
import { PatientResetPasswordComponent } from './components/patient/patient-reset-password/patient-reset-password.component';

const routes: Routes = [
  {path: '', component: PatientLoginComponent},
  {path: 'login', component: PatientLoginComponent},
  {path: 'register', component: PatientRegistrationComponent},
  {path: 'patient-dashboard', component: PatientDashboardComponent },
  {path: 'patient-health-info', component: PatientHealthInfoComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dr-dashboard', component: DrDashboardComponent, canActivate: [AuthGuard]},
  {path: 'nur-dashboard', component: NurDashboardComponent, canActivate: [AuthGuard]},
  {path: 'nur-add-diagnosis-info', component: NurAddDiagnosisInfoComponent, canActivate: [AuthGuard]},
  {path: 'adm-dashboard', component: AdmDashboardComponent, canActivate: [AuthGuard]},
  {path: 'dr-appointment', component: DrAppointmentComponent, canActivate: [AuthGuard]},
  {path: 'adm-dr-schedule', component: AdmDrScheduleComponent, canActivate: [AuthGuard]},
  {path: 'adm-patient-info', component: AdmPatientInfoComponent, canActivate: [AuthGuard]},
  {path: 'adm-dr-schedule-new', component: AdmDrScheduleNewComponent, canActivate: [AuthGuard]},
  {path: 'patient-health-record', component: PatientHealthRecordComponent, canActivate: [AuthGuard]},
  {path: 'health-info', component: HealthInfoComponent, canActivate: [AuthGuard]},
  {path:'patient-profile', component:PatientProfileComponent},
  {path:'admin-profile', component:AdminProfileComponent},
  {path:'forgot-password', component:PatientForgotPasswordComponent},
  {path:'patient-reset-password',component:PatientResetPasswordComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

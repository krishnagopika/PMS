import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/model/appointment';
import { HealthRecord } from 'src/app/model/health-record';
import { VisitDetails } from 'src/app/model/visit-details';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  public getAllAppointments(email:string, date:string, acceptance:string):Observable <any>{
    const params = new HttpParams()
   .set('email', email)
   .set('date',date)
   .set('acceptance',acceptance)
    return this.http.get<Appointment[]>(`http://localhost:8089/api/appointment/${email}/${date}`,{params});
    
  }
  // public getPatient(patientId:number):Observable <any>{
  //   const params = new HttpParams()
  //  .set('id', patientId)
    
  //   return this.http.get<Patient>('http://localhost:8089/api/patient/', {params});
    
  // }
  public getPatientHealthRecords(patient_id:number):Observable <any>{
    const params = new HttpParams()
   .set('patient_id', patient_id);
    
    return this.http.get<HealthRecord[]>('http://localhost:8089/api/health-records', {params});
    
  }
  public updateAppointment(appointmentId: number, acceptance:string):Observable<any>{
    const appointment = new Appointment(appointmentId,"",new Date,"",acceptance,0,"");
    const params = new HttpParams()
   .set('id', appointmentId);
    return this.http.put<VisitDetails>('http://localhost:8089/api/appointment/',appointment,{params} );
  }
}

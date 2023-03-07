import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  public getPatientAppointments(patient_id:string):Observable <any>{
    const params = new HttpParams()
   .set('patient_id', patient_id)
    return this.http.get<Appointment[]>('http://localhost:8089/api/appointments',{params});
    
  }
  public createAppointment(appointment:Appointment):Observable <any>{
    return this.http.post('http://localhost:8089/api/appointment',appointment, {responseType: 'text'});
    
  }
  public getAcceptedAppointments(acceptance:string,date:Date):Observable <any>{
   
    const params = new HttpParams()
   .set('acceptance', acceptance)
   .set('date', date.toDateString());
    return this.http.get<Appointment[]>('http://localhost:8089/api/appointments/',{params});
    
  }
}

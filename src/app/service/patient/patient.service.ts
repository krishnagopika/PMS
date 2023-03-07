
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/model/appointment';
import { Patient } from 'src/app/model/patient';
import { PatientLogin } from 'src/app/model/patient-login';
import { PhysicianAvailability } from 'src/app/model/physician-availability';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {   }

  public getPatient(patientId:number):Observable <any>{
    const params = new HttpParams()
   .set('id', patientId)
    
    return this.http.get<Patient>('http://localhost:8089/api/patient/', {params});
    
  }
  public loginPatient(patientLogin:PatientLogin):Observable <any>{
    const params = new HttpParams()
   .set('email', patientLogin.email)
   .set('password', patientLogin.password);
    
    return this.http.get<Patient>('http://localhost:8089/api/authenticate/login', {params});
    
  }
  public registerPatient(patient:Patient):Observable <any>{
    
    return this.http.post('http://localhost:8089/api/authenticate/register', patient, {responseType: 'text'});
    
  }
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
  public getAllPhysicianAvailabilities():Observable<any>{
    return this.http.get<PhysicianAvailability[]>('http://localhost:8089/api/physician-availability');
  }
  

 
}

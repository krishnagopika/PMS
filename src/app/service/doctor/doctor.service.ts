import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergy } from 'src/app/model/allergy';
import { Appointment } from 'src/app/model/appointment';
import { HealthRecord } from 'src/app/model/health-record';
import { Patient } from 'src/app/model/patient';
import { Prescription } from 'src/app/model/prescription';
import { Test } from 'src/app/model/test';
import { VisitDetails } from 'src/app/model/visit-details';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  // Appointmnet Service
  public getAllAppointments(email:string, date:string, acceptance:string):Observable <any>{
    const params = new HttpParams()
   .set('email', email)
   .set('date',date)
   .set('acceptance',acceptance)
    return this.http.get<Appointment[]>(`http://localhost:8089/api/appointment/${email}/${date}`,{params});
    
  }

  public updateAppointment(appointmentId: number, acceptance:string):Observable<any>{
    const appointment = new Appointment(appointmentId,"",new Date,"",acceptance,0,"");
    const params = new HttpParams()
   .set('id', appointmentId);
    return this.http.put<VisitDetails>('http://localhost:8089/api/appointment/',appointment,{params} );
  }

  //Patient Service
  public getPatient(patientId:number):Observable <any>{
    const params = new HttpParams()
   .set('id', patientId)
    
    return this.http.get<Patient>('http://localhost:8089/api/patient/', {params});
    
  }

  // Patient Health Info Service
  public getPatientHealthRecords(patient_id:number):Observable <any>{
    const params = new HttpParams()
   .set('patient_id', patient_id);
    
    return this.http.get<HealthRecord[]>('http://localhost:8089/api/health-records', {params});
    
  }
 
  public getHealthRecordByAppointmnetId(appointment_id:number):Observable <any>{
    const params = new HttpParams()
   .set('patient_id', appointment_id);
    
    return this.http.get<VisitDetails>('http://localhost:8089/api/health-record', {params});
    
  }

  public updatePatientHealthRecords(id: number, healtRecord: HealthRecord):Observable<any>{
    const params = new HttpParams()
    .set('id', id)
    return this.http.put<HealthRecord>('http://localhost:8089/api/health-record', healtRecord,{params})
  }

  public deleteTest(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Test>('http://localhost:8089/api/test',{params})

  }
  public deletePrescription(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Test>('http://localhost:8089/api/prescription',{params})

  }
  public addPrescription(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Prescription>('http://localhost:8089/api/prescription',{params})

  }
  public updatePrescription(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Prescription>('http://localhost:8089/api/prescription',{params})

  }
  public addTest(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Test>('http://localhost:8089/api/test',{params})

  }
  public updateTest(visit_details_id:number){
    const params = new HttpParams()
    .set('visit_details_id', visit_details_id)
    return this.http.delete<Test>('http://localhost:8089/api/prescription',{params})

  }

  // Allergy Service
  public getAllAlergies():Observable <any>{
    return this.http.get<Allergy[]>('http://localhost:8089/api/allergy');
    
  }

}

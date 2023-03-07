import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergy } from 'src/app/model/allergy';
import { Patient } from 'src/app/model/patient';
import { VisitDetails } from 'src/app/model/visit-details';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }
  public getAllAlergies():Observable <any>{
    return this.http.get<Allergy[]>('http://localhost:8089/api/allergy');
    
  }
  public getPatient(patientId:number):Observable <any>{
    const params = new HttpParams()
   .set('id', patientId)
    
    return this.http.get<Patient>('http://localhost:8089/api/patient/', {params});
    
  }
  public getVisitDetails(appointent_id:number):Observable <any>{
    const params = new HttpParams()
   .set('appointment_id', appointent_id);
    
    return this.http.get<VisitDetails>('http://localhost:8089/api/health-record/', {params});
    
  }
  public getRecentVisitDetails(patient_id:number):Observable <any>{
    const params = new HttpParams()
   .set('appointment_id', patient_id);
    
    return this.http.get<VisitDetails>('http://localhost:8089/api/health-record/', {params});
    
  }
  public createVisitDetails(visitdetails:VisitDetails):Observable <any>{
    
    return this.http.post('http://localhost:8089/api/health-record', visitdetails);
    
  }
}

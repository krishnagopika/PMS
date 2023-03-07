import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthRecord } from 'src/app/model/health-record';

@Injectable({
  providedIn: 'root'
})
export class HealthRecordService {

  constructor(private http: HttpClient){   }

  public getPatientHealthRecords(patient_id:number):Observable <any>{
    const params = new HttpParams()
   .set('patient_id', patient_id);
    
    return this.http.get<HealthRecord[]>('http://localhost:8089/api/health-records', {params});
    
  }
}

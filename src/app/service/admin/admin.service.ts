import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PhysicianAvailability } from 'src/app/model/physician-availability';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {   }

  // Physician Availability
  public createPhysicianAvailability(physicianAvailability:PhysicianAvailability):Observable <any>{
    
    return this.http.post('http://localhost:8089/api/physician-availability', physicianAvailability, {responseType: 'text'});
    
  }
  public updatePhysicianAvailability(physicianAvailability:PhysicianAvailability, id:number):Observable <any>{

    const params = new HttpParams()
   .set('id', id);
    return this.http.put<PhysicianAvailability>('http://localhost:8089/api/physician-availability', physicianAvailability,{params});
    
  }
  public deletePhysicianAvailability(id:number):Observable <any>{
    const params = new HttpParams()
    .set('id', id);
    return this.http.delete('http://localhost:8089/api/physician-availability',{params});
    
  }

  public getAllPhysicianAvailabilities():Observable<any>{
    return this.http.get<PhysicianAvailability[]>('http://localhost:8089/api/physician-availability');
  }

  // Patient Info
  public getAllPatients():Observable <any>{
    
    return this.http.get<Patient[]>('http://localhost:8089/api/patient');
    
  }
}

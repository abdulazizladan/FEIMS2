import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment.dev';
import { LVE } from '../models/lve.model'
import { HVE } from '../models/hve.model';
import { catchError } from 'rxjs/operators';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor( private http: HttpClient ) { }

  getAllHighValueEquipment(): Observable<HVE[]>{
    return this.http.get<HVE[]>(`${baseUrl}/equipment/high-value`);
  }

  getSingleHighValueEquipment( id: string): Observable<HVE>{
    return this.http.get<HVE>(`${baseUrl}/equipment/high-value`);
  }
  
  getAllLowValueEquipment(): Observable<LVE[]>{
    return this.http.get<LVE[]>(`${baseUrl}/equipment/low-value`);
  }

  getSingleLowValueEquipment( id: string ): Observable<LVE>{
    return this.http.get<LVE>(`${baseUrl}/equipment/low-value`);
  }

  addHighValueEquipment( hve: HVE ): Observable<HVE>{
    return this.http.post<HVE>(`${baseUrl}/equipment/high-value`, hve)
    .pipe(
      catchError(() => throwError('error adding equipment'))
    );
  };

  addLowValueEquipment( lve: LVE ): Observable<LVE>{
    return this.http.post<LVE>(`${baseUrl}/equipment/low-value`, lve)
    .pipe(
      catchError(() => throwError('error adding equipment'))
    );
  };

}

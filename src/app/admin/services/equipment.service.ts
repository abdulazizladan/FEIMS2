import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LVE } from '../models/lve.model'
import { HVE } from '../models/hve.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor( private http: HttpClient ) { }

  getAllHighValueEquipment(): Observable<HVE[]>{
    return this.http.get<HVE[]>('127.0.0.1:3000/');
  }

  getSingleHighValueEquipment( id: string): Observable<HVE>{
    return this.http.get<HVE>('127.0.0.1:3000/hve');
  }
  
  getAllLowValueEquipment(): Observable<HVE[]>{
    return this.http.get<HVE[]>('127.0.0.1:3000/equipments/high-value');
  }

  getSingleLowValueEquipment( id: string ): Observable<HVE>{
    return this.http.get<HVE>('127.0.0.1:3000/equipments/low-value');
  }

  addHighValueEquipment( hve: HVE ): Observable<HVE>{
    return this.http.post<HVE>('127.0.0.1:3000/equipments/high-value', hve)
  };

  addLowValueEquipment( lve: LVE ): Observable<LVE>{
    return this.http.post<LVE>('127.0.0.1:3000/equipments/low-value', lve)
  };

}

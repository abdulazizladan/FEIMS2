import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LVE } from '../models/lve.model'
import { HVE } from '../models/hve.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  /**
   * 
   * @param _http 
   */
  constructor( private _http: HttpClient ) { }

  getAllHighValueEquipment(): Observable<HVE[]>{
    return this._http.get<HVE[]>('127.0.0.1:3000/');
  }

  getSingleHighValueEquipment( id: string): Observable<HVE>{
    return this._http.get<HVE>('127.0.0.1:3000/hve');
  }
  
  getAllLowValueEquipment(): Observable<HVE[]>{
    return this._http.get<HVE[]>('127.0.0.1:3000/equipment/high-value');
  }

  getSingleLowValueEquipment( id: string ): Observable<HVE>{
    return this._http.get<HVE>('127.0.0.1:3000/equipment/low-value');
  }

  addHighValueEquipment( hve: HVE ): Observable<HVE>{
    return this._http.post<HVE>('127.0.0.1:3000/equipment/high-value', hve)
  };

  addLowValueEquipment( lve: LVE ): Observable<LVE>{
    return this._http.post<LVE>('127.0.0.1:3000/equipment/low-value', lve)
  };

}

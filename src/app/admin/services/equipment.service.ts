import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this._http.get<HVE[]>('127.0.0.1:3000/');
  }

  getSingleLowValueEquipment( id: string ): Observable<HVE>{
    return this._http.get<HVE>('127.0.0.1:3000/lve');
  }

}

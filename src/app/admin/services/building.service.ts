import { Injectable } from '@angular/core';
import { building } from '../models/building.model';
import { environment } from 'environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly buildingsUrl: string = "";
  private readonly singleBuildingUrl: string = "";
  private readonly addBuildingUrl: string = "buildings";

  constructor( private _http : HttpClient ){

  }

  addBuilding( building: building ): Observable<any>{
    return this._http.post<any>(`${baseUrl}/buildings`, building).pipe(delay(500));
  }

  getBuildings(){
    return this._http.get<any>(`${baseUrl}/buildings`).pipe(delay(500));
  }

  getSingleBuilding( id: string){
    return this._http.get<any>(`${baseUrl}/buildings/${id}`).pipe(delay(500));
  }
}

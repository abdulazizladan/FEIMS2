import { Injectable } from '@angular/core';
import { Building } from '../models/building.model';
import { environment } from 'environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, map, catchError } from 'rxjs/operators';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly buildingsUrl: string = "";
  private readonly singleBuildingUrl: string = "buildings/{id}";
  private readonly addBuildingUrl: string = "buildings";

  /**
   * Constructor
   * @param _http 
   */
  constructor( private _http : HttpClient ){

  }

  /**
   * Upload building data
   * @param building 
   * @returns 
   */
  addBuilding( building: Building ): Observable<any>{
    return this._http.post<Building>(`${baseUrl}/buildings`, building).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  /**
   * get a list of buildings
   * @returns buildings array
   */
  getBuildings(): Observable<Building[]>{
    ///return this._http.get<Building[]>(`${baseUrl}/buildings`).pipe(
    //  delay(5000)
    //);
    return this._http.get<Building[]>('http://127.0.0.1:3000/buildings')
  }

  /**
   * get a single building's details
   * @param id 
   * @returns building
   */
  getSingleBuilding( id: string){
    return this._http.get<Building>(`${baseUrl}/buildings/${id}`).pipe(delay(500));
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}

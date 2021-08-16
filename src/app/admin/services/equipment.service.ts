import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<HVE>(`${baseUrl}/equipment/high-value`, hve, {headers: reqHeader})
    .pipe(
      //catchError(() => throwError('error adding equipment'))
    );
  };

  addLowValueEquipment( lve: LVE ): Observable<LVE>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<LVE>(`${baseUrl}/equipment/low-value`, lve, {headers: reqHeader})
    .pipe(
      catchError(() => throwError('error adding equipment'))
    );
  };

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site.model';
import { environment } from 'environment.dev';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { tap, map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AdminState } from 'app/store/admin/admin.state';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string = "sites";

  /**
   * 
   * @param http
   * @param store 
   */
  constructor( private http : HttpClient, private store: Store<AdminState> ){
    this.sitesUrl = "sites";
  }

  /**
  * get an array of all buildings
  * @returns  sites 
  **/
  getSites(): Observable<Site[]>{
    return this.http.get<Site[]>(`${baseUrl}/buildings`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  /**
  * get a single building's details
  * @param id
  * @returns site
  **/
  getSingleSite( id: number): Observable<Site>{
    return this.http.get<any>(`${baseUrl}/sites`).pipe(delay(500));
  }

  /**
   * 
   * @param site 
   * @returns site
   */
  addSite( site: Site): Observable<Site> {
    return this.http.post<Site>(`${baseUrl}/sites`, site).pipe(
      catchError(() => throwError('error retrieving sites'))
    );
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

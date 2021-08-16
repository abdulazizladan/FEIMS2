import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site.model';
import { environment } from 'environment.dev';
import { Observable, throwError } from 'rxjs';
import { tap, map, delay, catchError, mergeMap } from 'rxjs/operators';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string = "sites";

  /**
   * @param http
   * @param store 
   */
  constructor( private http : HttpClient){
    this.sitesUrl = "sites";
  }

  /**
  * get an array of all buildings
  * @returns  sites 
  **/
  getSites(): Observable<Site[]>{
    //return this.http.get<Site[]> (`${baseUrl}/sites`)
    //return this.http.get<Site[]> (`${baseUrl}/sites`)
    //.pipe(
    //  tap(data => console.log(JSON.stringify(data))),
    //  catchError(this.handleError)
    //);
    return this.http.get<Site[]>('http://127.0.0.1:3000/sites')
  }

  /**
  * get a single building's details
  * @param id
  * @returns site
  **/
  getSingleSite( id: number): Observable<Site>{
    //return this.http.get<Site> (`${baseUrl}/sites`, id)
    return this.http.get<Site>(`${baseUrl}/sites/${id}`)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(() => throwError('error retreiving site'))
    );
  }

  /**
   * 
   * @param site 
   * @returns site
   */
  addSite( site: Site): Observable<Site> {
    return this.http.post<Site>(`${baseUrl}/sites`, site)
    .pipe(
      catchError(() => throwError('error adding site'))
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}

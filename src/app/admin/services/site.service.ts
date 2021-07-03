import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site.model';
import { environment } from 'environment.dev';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AdminState } from 'app/store/admin/admin.state';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string;

  constructor( private http : HttpClient, private store: Store<AdminState> ){
    this.sitesUrl = "./assets/sites.json";
  }

  /**
  *
  **/
  getSites(): Observable<Site[]>{
    return this.http.get<Site[]>(this.sitesUrl).pipe(
      catchError(() => throwError('error retrieving sites'))
    );
  }

  /**
  *
  **/
  getSingleSite(){
    return this.http.get<any>(this.siteUrl).pipe(delay(500));
  }

  addSite( site: Site): Observable<Site> {
    return this.http.post<Site>(`${baseUrl}/sites`, site).pipe(
      catchError(() => throwError('error retrieving sites'))
    );
  }

}

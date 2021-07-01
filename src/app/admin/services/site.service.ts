import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site.model';
import { environment } from 'environment.dev';
import { Observable, of } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string;
  private addSiteUrl: string = 'sites';

  constructor( private _http : HttpClient ){
    this.sitesUrl = "./assets/sites.json";
  }

  getSites(){
    return this._http.get<any>(this.sitesUrl);
  }

  getSingleSite(){
    return this._http.get<any>(this.siteUrl);
  }

  addSite( site: Site): Observable<any> {
    return this._http.post(`${baseUrl}/sites`, site)
  }

}

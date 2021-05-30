import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site.model';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string;
  private addSiteUrl: string;

  constructor( private _http : HttpClient ){
    this.sitesUrl = "./assets/sites.json";
  }

  getSites(){
    return this._http.get<any>(this.sitesUrl);
  }

  getSingleSite(){
    return this._http.get<any>(this.siteUrl);
  }

  addSite(site: Site) {
    return this._http.post<any>(this.addSiteUrl, site);
  }
}

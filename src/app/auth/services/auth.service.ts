import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData } from '../models/loginData.model';
import { environment } from '../../environment';
import { ApiPaths } from '../../ApiPaths';
import { AppSocket } from '../../app.socket';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Powered-By': 'Express'

  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= environment.baseUrl;

  //private loginUrl: string = '${this.baseUrl}/${this.apiPaths.signinUrl}';
  //private registerUrl: string = '${this.baseUrl}/${this.apiPaths.signupUrl}';
  private readonly loginUrl: string = "https://app.narr.ng/api/v1/auth/login";
  private readonly registerUrl: string = "https://app.narr.ng/api/v1/auth/register";

  constructor( private _http: HttpClient, private appSocket: AppSocket) {

   }

  login(credentials: LoginData){
    return this._http.post<any>( this.loginUrl, credentials, httpOptions)
  }

  register(value: {email: string, password: string}){
    return this._http.post<any>( this.registerUrl, value)
  }

  resetPassword(value: string): boolean {
    return true;
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  addUserToCache(){

  }

  getUserFromCache(){

  }

  isAuthenticated(): boolean{
    //if(local storage credentials are validated){
    //  return tru
    //}
    return true;
  }
}

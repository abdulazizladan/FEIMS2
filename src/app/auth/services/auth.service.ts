import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData } from '../models/loginData.model';
import { environment } from '../../../environment.dev';
import { ApiPaths } from '../../ApiPaths';
import { AppSocket } from '../../app.socket';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User{
  email: string,
  token: string,
}

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

  public user: Observable<any>;
  private baseUrl= environment.baseUrl;

  private readonly loginUrl: string = `${this.baseUrl}/${ApiPaths.signin}`;
  private readonly registerUrl: string = `${this.baseUrl}/${ApiPaths.signup}`;
  
  /**
   * Constructor
   * @param _http 
   * @param appSocket 
   */
  constructor( private _http: HttpClient, private appSocket: AppSocket) {

   }

   /**
    * Login
    * @param credentials
    */
  login(credentials: LoginData){
    return this._http.post<any>( this.loginUrl, credentials, httpOptions).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      })
    )
  }

  /**
   * Register
   * @param value
   */
  register(value: {email: string, password: string}){
    return this._http.post<any>( this.registerUrl, value)
  }

  /**
   * Reset password
   * @param value
   */
  resetPassword(value: string): boolean {
    return true;
  }

  /**
   * is user logged in?
   */
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  /**
   * get JWT token
   */
  getToken(){
    return localStorage.getItem('token');
  }

  /**
   * add user to cache
   */
  addUserToCache(){

  }

  /**
   * get user from cache
   */
  getUserFromCache(){

  }

  /**
   * Is user authenticated?
   * @returns 
   */
  isAuthenticated(): boolean{
    //if(local storage credentials are validated){
    //  return true
    //}
    return true;
  }
}

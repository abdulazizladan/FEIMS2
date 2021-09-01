import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http: HttpClient ) { }

  getInbox(): Observable<Email[]> {
    return null;
  }

  getOutbox(): Observable<Email[]> {
    return null
  }

  send(email: Email): Observable<Email> {
    return null;
  }
}

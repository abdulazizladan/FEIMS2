import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../models/notofication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private http: HttpClient) { }

  
  send( notification: Notification ): Observable<Notification> {
    return this.http.post<Notification>('', notification)
  }

  findAll(): Observable<Notification> {
    return this.http.get<Notification>('');
  }
}

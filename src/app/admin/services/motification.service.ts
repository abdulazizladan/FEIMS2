import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Notification{
  recipient: string,
  description: string,
  body: string,
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class MotificationService {

  constructor( private http: HttpClient) { }

  
  send( notification: Notification ): Observable<Notification> {
    return this.http.post<Notification>('', notification)
  }
}

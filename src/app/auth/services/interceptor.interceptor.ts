import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor( private auth: AuthService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //request = request.clone({
    //  setHeaders: {
    //    Authorization: 'Bearer ${this.auth.getToken()}'
    // }
    //})
    //return next.handle(request);

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
    
  }
}

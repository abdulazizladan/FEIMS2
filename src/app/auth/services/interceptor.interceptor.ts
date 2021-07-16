import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor( private auth: AuthService, private router: Router ) {}

  /**
   * Intercept http requests
   * @param request 
   * @param next 
   * @returns 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ${this.auth.getToken()}',
        //'Content-Type':  'application/json',
        //'Access-Control-Allow-Origin': '*',
        //'X-Powered-By': 'Express'
     }
    })
    return next.handle(request);

    /**return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigateByUrl('./signin')
        }
      }
    });
    */
  }
}

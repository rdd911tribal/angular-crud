import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Clone the request and add the Authorization header with the bearer token
    const authReq = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer jwt-token-here`)
        .set('Content-Type', 'application/json'),
    });

    return next.handle(authReq);
  }
}

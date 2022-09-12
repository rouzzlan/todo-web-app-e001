import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly accessToken: string;

  constructor(private authService: AuthService, private router: Router) {
    this.accessToken = authService.getAccessToken();
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if (req.url.startsWith(environment.baseUrl)) {
    //   req = req.clone({
    //       setHeaders: {
    //         Authorization: `Bearer ${this.accessToken}`
    //       }
    //     }
    //   );
    //   return next.handle(req);
    // } else {
    //   return next.handle(req);
    // }
    return next.handle(req);
  }
}

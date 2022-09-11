import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";
import {User} from "oidc-client";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.tokenExpired().then((user: User | null): boolean => {
      // console.log(user)
      if (user === null || user === undefined ) {
        console.log('No user in storage');
        this.router.navigate(['/session-expired']).then();
        return false;
      }
      else if (user?.expires_in <= 0 && user?.expired) {
        console.log('AuthGuard: token expired');
        this.router.navigate(['/session-expired']).then();
        return false;
      } else {
        return true;
      }
    });
  }
}

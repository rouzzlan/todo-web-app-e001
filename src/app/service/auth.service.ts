import { Injectable } from '@angular/core';
import {SignoutResponse, User, UserManager} from "oidc-client";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager: UserManager;
  private readonly stsSetting: any;
  private user: User | null;

  constructor() {
    this.stsSetting = environment.authconf;
    this.userManager = new UserManager(this.stsSetting);
    this.user = null;
  }

  startSignin() {
    this.userManager.signinRedirect({data: 'some data'}).then(function () {
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
  }

  completeLogin(): Promise<User> {
    return this.userManager.signinRedirectCallback().then(user => {
      console.log(user);
      this.user = user;
      return user;
    });
  }

  getLoggedInUser(): User | null {
    return this.user !== null ? this.user : null;
  }

  completeLogout(): Promise<SignoutResponse> {
    this.user = null;
    return this.userManager.signoutRedirectCallback();
  }

  startLogout() {
    this.userManager.signoutRedirect();
  }

  tokenExpired(): Promise<User | null> {
    return this.userManager.getUser();
  }
}

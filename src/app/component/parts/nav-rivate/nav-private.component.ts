import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-nav-private',
  templateUrl: './nav-private.component.html',
  styleUrls: ['./nav-private.component.css']
})
export class NavPrivateComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoutEvent() {
    this.authService.startLogout();
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.css']
})
export class SessionExpiredComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginEvent() {
    this.authService.startSignin();
  }
}

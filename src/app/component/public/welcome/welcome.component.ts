import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  loginEvent() {
    this.authService.startSignin();
  }

}

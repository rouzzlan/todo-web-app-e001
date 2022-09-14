import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-private',
  templateUrl: './nav-private.component.html',
  styleUrls: ['./nav-private.component.css']
})
export class NavPrivateComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logoutEvent() {
    this.authService.startLogout();
  }

  todoListEvent() {
    this.router.navigate(['todo/list']).then();
  }

  todoCreateEvent() {
    this.router.navigate(['todo/create']).then();
  }
}

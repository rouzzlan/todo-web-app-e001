import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./component/public/welcome/welcome.component";
import {RedirectComponent} from "./component/auth/redirect/redirect.component";
import {SessionExpiredComponent} from "./component/auth/session-expired/session-expired.component";
import {HomeComponent} from "./component/private/home/home.component";
import {AuthGuard} from "./guard/auth.guard";
import {TodoListComponent} from "./component/private/todo/todo-list/todo-list.component";
import {TodoCreateComponent} from "./component/private/todo/todo-create/todo-create.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login-redirect', component: RedirectComponent},
  {path: 'logout-redirect', component: RedirectComponent},
  {path: 'session-expired', component: SessionExpiredComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'todo/list', component: TodoListComponent, canActivate: [AuthGuard]},
  {path: 'todo/create', component: TodoCreateComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

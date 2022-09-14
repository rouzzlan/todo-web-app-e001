import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/public/welcome/welcome.component';
import { HomeComponent } from './component/private/home/home.component';
import { TodoListComponent } from './component/private/todo/todo-list/todo-list.component';
import { TodoCreateComponent } from './component/private/todo/todo-create/todo-create.component';
import { SessionExpiredComponent } from './component/auth/session-expired/session-expired.component';
import { RedirectComponent } from './component/auth/redirect/redirect.component';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./interceptor/interceptors";
import { NavPrivateComponent } from './component/parts/nav-rivate/nav-private.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    TodoListComponent,
    TodoCreateComponent,
    SessionExpiredComponent,
    RedirectComponent,
    NavPrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

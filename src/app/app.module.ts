import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/public/welcome/welcome.component';
import { HomeComponent } from './component/private/home/home.component';
import { TodoListComponent } from './component/private/todo/todo-list/todo-list.component';
import { TodoCreateComponent } from './component/private/todo/todo-create/todo-create.component';
import { SessionExpiredComponent } from './component/public/session-expired/session-expired.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    TodoListComponent,
    TodoCreateComponent,
    SessionExpiredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

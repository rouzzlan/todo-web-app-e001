import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo, ToDoBase} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todo`);
  }

  postTodo(todo: ToDoBase): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/todo`, todo);
  }
}

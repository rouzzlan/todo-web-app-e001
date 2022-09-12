import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../../../model/todo";
import {TodoService} from "../../../../service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}

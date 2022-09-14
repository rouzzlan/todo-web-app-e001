import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToDoBase} from "../../../../model/todo";
import {TodoService} from "../../../../service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoFormGroup: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {
    this.todoFormGroup = new FormGroup<any>({
      title: new FormControl,
      text: new FormControl
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: ToDoBase = new ToDoBase();
    todo.title = this.todoFormGroup.value.title;
    todo.text = this.todoFormGroup.value.text;
    this.todoService.postTodo(todo).subscribe(() => {
      this.router.navigate(['todo/list']).then()
    })
  }
}

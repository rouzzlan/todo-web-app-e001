import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todoFormGroup: FormGroup;

  constructor() {
    this.todoFormGroup = new FormGroup<any>({
      title: new FormControl,
      text: new FormControl
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.todoFormGroup.value.title);
    console.log(this.todoFormGroup.value.text);
  }
}

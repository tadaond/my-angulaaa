import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';   // inserting todo.ts file

@Component({
  selector: 'app-todo',
  template:
  `
  <div class="todo">
    <img src="/assets/todo-bg.png">

    <h1>To-Do list</h1>
    <form (submit) = "addTodo()">
      <input
        type ="text"
        name = "inputTodo"
        placeholder = "Enter your  'do'"
        class = "todo-input"
        [(ngModel)]="inputTodo"
      />
    <input type="submit" value="Add Item" class="todo-submit"/>
    </form>

    <div *ngFor="let todo of todos; let i = index;" class = "todo {{ (todo.completed ? 'done' : '' ) }}">
      <div class = "id">{{i}}</div>
      <div class = "content" (click) = "toggleDone(i)">{{todo.content}}</div>
      <button class = "delete" (click) = "deleteTodo(i)">Remove</button>
     </div>
  </div>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  injvar = "injected variable"; // this is how to insert a variable
  todos:Todo[];                 // reffering to ts file class in models;
  inputTodo:string = "";

  ngOnInit(): void {
    this.todos = 
    [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone(id: number): void{
    this.todos.map((v, i) => { if(i == id) v.completed = !v.completed; return v;})
  }

  deleteTodo(id:number): void{
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos.push({ content: this.inputTodo, completed: false});

    this.inputTodo = "";
  }

}

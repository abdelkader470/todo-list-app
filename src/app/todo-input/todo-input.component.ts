import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodo: string = '';

  onAddTodo() {
    if (this.newTodo.trim() !== '') {
      this.addTodo.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}

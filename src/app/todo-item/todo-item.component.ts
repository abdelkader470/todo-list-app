// todo-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todo!: TodoItem;
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleCompletion: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    // Emit the todo item's id for deletion
    this.deleteTodo.emit(this.todo.id);
  }

  onToggleCompletion() {
    // Emit the todo item's id for toggling completion status
    this.toggleCompletion.emit(this.todo.id);
  }
}

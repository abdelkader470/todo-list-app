// app/todo-list/todo-list.component.ts
import { Component } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo: string = '';
  todos: TodoItem[] = [];
  nextId: number = 1;

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: this.nextId++,
        title: this.newTodo,
        completed: false,
      };
      this.todos.push(newTodoItem);
      this.newTodo = '';
    }
  }

  markAsCompleted(todo: TodoItem) {
    todo.completed = true;
  }

  markAsPending(todo: TodoItem) {
    todo.completed = false;
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  getPendingTodos(): TodoItem[] {
    return this.todos.filter((todo) => !todo.completed);
  }

  getCompletedTodos(): TodoItem[] {
    return this.todos.filter((todo) => todo.completed);
  }
}

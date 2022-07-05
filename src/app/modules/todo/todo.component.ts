import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '@apps/shared/models/todo.model';
import { TodoService } from '@apps/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  public todos: Todos[] = [];
  public cols: any[] = [];
  public todoForm: FormGroup;
  editTodo: Todos;
  id: any

  constructor(private _todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodosList();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'completed', header: 'Completed' },
      { field: 'action', header: 'action' },
    ];
  }

  /**
   * get todo list from firebase
   */
  private getTodosList(): void {
    this._todoService.getTodosList().subscribe(data => {
      if (data) {
        this.todos = data;
      }
    });
  }

  /**
   * Create Todo on firebase using child to parent event emmitter
   * @param todo 
   */
  public addTodo(todo: Todos): void {
    this._todoService.addTodo(todo);
    this.getTodosList();

  }

  /**
   * delete single todo from firebase using child to parent event emmiter
   * @param id
   */
  public deleteTodoById(id: string): void {
    this._todoService.deleteTodo(id)
    this.getTodosList();
  }

  /**
   * delete single todo from firebase using child to parent event emmiter
   * @param id
   */
  public routeTodoById(id: string): void {
    this.router.navigate([`todo/${id}`])
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '@apps/shared/models/todo.model';
import { TodoService } from '@apps/shared/services/todo.service';
import { EditTodoComponent } from '@apps/modules/todo/pages/edit-todo/edit-todo.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  id: any;
  todo: Todos
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private _todoService: TodoService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoDetail(this.id);

  }

  private todoDetail(id: any): void {
    this._todoService.getTodoById(id).valueChanges().subscribe((data: any) => {
      this.todo = data
    });
  }

  public editTodo(todo: Todos): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '600px',
      height:'500px',
      data: {
        id: this.id,
        todoTitle: todo.todoTitle,
        todoContent: todo.todoContent,
        completed: todo.completed,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['todo'])
    });
  }
}




import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '@apps/shared/models/todo.model';
import { TodoService } from '@apps/shared/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.sass']
})
export class EditTodoComponent implements OnInit {
  public todoForm: FormGroup;
  todo:any;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private router:Router,
    private _todoService:TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      id:this.data.id,
      todoTitle:this.data.todoTitle,
      todoContent:this.data.todoContent,
      completed:this.data.completed
    });
   }
  
  /**
   * create single todo on firebase using child to parent emit
   */
   public updateTodo(id,todo:Todos):void{
    this._todoService.updateTodo(id,this.todoForm.value);
    this.dialogRef.close();

  }

}

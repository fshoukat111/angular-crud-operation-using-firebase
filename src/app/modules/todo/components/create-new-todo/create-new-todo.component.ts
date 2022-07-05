import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todos } from '@apps/shared/models/todo.model';

@Component({
  selector: 'app-create-new-todo',
  templateUrl: './create-new-todo.component.html',
  styleUrls: ['./create-new-todo.component.sass']
})
export class CreateNewTodoComponent implements OnInit {
  public todoForm: FormGroup;
  _editTodo:any;
  buttonName:any;

  @Input() set editTodo(val:Todos){
    if(val){
      this._editTodo = val;
    }

  };
  @Output() addTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todoTitle: new FormControl(''),
      todoContent: new FormControl(''),
      completed: false
    });
   }

  /**
   * create single todo on firebase using child to parent emit
   */
  public todoSubmit(): void {
    if(this._editTodo){
    this.updateTodo.emit(this.todoForm.value);
    }
    this.addTodo.emit(this.todoForm.value);
  }

}

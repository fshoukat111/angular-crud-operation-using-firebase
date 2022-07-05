import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTodoComponent } from './create-new-todo.component';

describe('CreateNewTodoComponent', () => {
  let component: CreateNewTodoComponent;
  let fixture: ComponentFixture<CreateNewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

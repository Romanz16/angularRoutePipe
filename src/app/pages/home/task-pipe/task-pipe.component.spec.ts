import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPipeComponent } from './task-pipe.component';

describe('TaskPipeComponent', () => {
  let component: TaskPipeComponent;
  let fixture: ComponentFixture<TaskPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

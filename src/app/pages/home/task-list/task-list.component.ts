import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  title = 'taskList';
  count = 5;
  arrObjTask: Array<Task> = [
    {
      task: 'HTML5',
      checker: true
    },
    {
      task: 'SCSS',
      checker: true
    },
    {
      task: 'Angular',
      checker: false
    },
    {
      task: 'Jquery',
      checker: false
    },
    {
      task: 'JavaScript',
      checker: false
    }
  ];
  task: string;
  editTask1: string;
  checker = false;
  status = false;
  editIndex: number;
  public addTask(): void {
    if (this.task !== '') {
      const task = new Task(this.task, this.checker);
      this.arrObjTask.push(task);
      this.task = '';
      this.count++;
    }
  }
  public deleteTask(index: number): void {
    this.arrObjTask.splice(index, 1);
    this.count--;
  }
  public isChange(check: boolean, index: number): void {
    if (check) {
      this.arrObjTask[index].checker = true;
    } else { this.arrObjTask[index].checker = false; }
  }
  public editTask(index: number): void {
    this.editTask1 = this.arrObjTask[index].task;
    this.editIndex = index;
    this.status = true;
  }
  public editSave(): void {
    if (this.editTask1 === '') {
      alert('Ви ввели пусте поле');
    } else {
      this.arrObjTask[this.editIndex].task = this.editTask1;
      this.editTask1 = '';
      this.status = false;
    }
  }

  ngOnInit() {
  }

}

interface ITask {
  task: string;
  checker: boolean;
}
class Task implements ITask {
  constructor(public task: string, public checker: boolean) {
    this.task = task;
    this.checker = checker;
  }
}
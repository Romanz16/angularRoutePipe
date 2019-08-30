import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-object',
  templateUrl: './task-object.component.html',
  styleUrls: ['./task-object.component.scss']
})
export class TaskObjectComponent implements OnInit {
  title = 'Angulat user Tasks';
  arrObjName: Array<User> = [];
  login: string;
  pass: string;
  email: string;
  status = false;
  statusDelete = false;
  editIndex: number;
  regEmail: RegExp = new RegExp(/^([a-z0-9\-\.]+)@[a-z]+\.([a-z]){2,}$/, 'i');

  public addUser(): void {
    if (this.login === '' || this.pass === '' || this.email === '') {
      alert('Заповніть усі поля');
    } else if (this.regEmail.test(this.email)) {
      const user = new User(this.login, this.pass, this.email);
      this.arrObjName.push(user);
      this.login = '';
      this.pass = '';
      this.email = '';
    } else { alert('Ви ввели не коректний email'); }

  }
  public editUser(index: number): void {
    this.login = this.arrObjName[index].login;
    this.pass = this.arrObjName[index].pass;
    this.email = this.arrObjName[index].email;
    this.status = true;
    this.editIndex = index;
    this.statusDelete = true;
  }
  public saveEditUser(): void {
    if (this.login === '' || this.pass === '' || this.email === '') {
      alert('Заповніть усі поля');
    } else if (this.regEmail.test(this.email)) {
      const user = new User(this.login, this.pass, this.email);
      this.arrObjName[this.editIndex] = user;
      this.login = '';
      this.pass = '';
      this.email = '';
    } else { alert('Ви ввели не коректний email'); }
    this.status = false;
    this.statusDelete = false;
  }
  public deleteUser(index: number): void {
    this.arrObjName.splice(index, 1);
  }

  ngOnInit() {
  }

}

interface IUser {
  login: string;
  pass: string;
  email: string;
}
class User implements IUser {
  constructor(public login: string, public pass: string, public email: string) {
    this.login = login;
    this.pass = pass;
    this.email = email;
  }
}
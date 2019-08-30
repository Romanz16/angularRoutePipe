import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-pipe',
  templateUrl: './task-pipe.component.html',
  styleUrls: ['./task-pipe.component.scss']
})
export class TaskPipeComponent implements OnInit {
  title = 'My phone book';
  arrUsers: Array<PhoneBook> = [
    {
      fName: 'Ivan',
      lName: 'Ivanov',
      numPhone: '0934455667'
    },
    {
      fName: 'Liza',
      lName: 'Brend',
      numPhone: '0506775645'
    },
    {
      fName: 'Petro',
      lName: 'Nono',
      numPhone: '0639998786'
    },
    {
      fName: 'Jquery',
      lName: 'Petrovych',
      numPhone: '0440001234'
    },
    {
      fName: 'JavaScript',
      lName: 'Dimuch',
      numPhone: '0996765111'
    }
  ];
  fName: string;
  lName: string;
  phone: string;
  statusAdd: boolean = true;
  editIndex: number;
  error: string = '';
  success: string = '';
  regPhone: RegExp = new RegExp(/^[0-9]{6,}$/, 'i');
  searchText: string = '';
  constructor() { }

  ngOnInit() {
  }


  public add(): void {
    this.statusAdd = true;
    this.fName = '';
    this.lName = '';
    this.phone = '';
    this.success = '';
    this.error = '';
  }
  public edit(i: number): void {
    this.success = '';
    this.error = '';
    this.statusAdd = false;
    this.editIndex = i;
    this.fName = this.arrUsers[i].fName;
    this.lName = this.arrUsers[i].lName;
    this.phone = this.arrUsers[i].numPhone;
  }
  public addUser(): void {
    if (this.fName !== '' && this.lName !== '' && this.phone !== '' && this.regPhone.test(this.phone)) {
      const user = new PhoneBook(this.fName, this.lName, this.phone);
      this.arrUsers.push(user);
      this.fName = '';
      this.lName = '';
      this.phone = '';
      this.success = 'Вітаємо користувача успішно додано!';
      this.error = '';
    } else {
      this.error = 'Коректно заповніть усі поля! Телефон повинен містити лише цифри (мінімальна кількість цифр 6)';
      this.success = '';
    }
  }
  public editSave(): void {
    if (this.fName !== '' && this.lName !== '' && this.phone !== '' && this.regPhone.test(this.phone)) {
      this.arrUsers[this.editIndex].fName = this.fName;
      this.arrUsers[this.editIndex].lName = this.lName;
      this.arrUsers[this.editIndex].numPhone = this.phone;
      this.fName = '';
      this.lName = '';
      this.phone = '';
      this.success = 'Дані успішно змінено!';
      this.error = '';
    } else {
      this.error = 'Коректно заповніть усі поля! Телефон повинен містити лише цифри (мінімальна кількість цифр 6)';
      this.success = '';
    }
  }
  public deleteUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }

  sort1 = [3, 3, 3];
  public sort(name: string, num: number): void {
    let sortColumn = this.sort1[num];
    this.sort1[0] = 3;
    this.sort1[1] = 3;
    this.sort1[2] = 3;
    if (sortColumn !== 2) {
      this.sort1[num] = 2;
      this.arrUsers.sort(function (a, b) {
        let nameA = a[name].toUpperCase();
        let nameB = b[name].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sort1[num] = 1;
      this.arrUsers.sort(function (a, b) {
        let nameA = a[name].toUpperCase();
        let nameB = b[name].toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
}

interface IPhoneBook {
  fName: string;
  lName: string;
  numPhone: string;
}
class PhoneBook implements IPhoneBook {
  constructor(public fName: string, public lName: string, public numPhone: string, ) {
    this.fName = fName;
    this.lName = lName;
    this.numPhone = numPhone;
  }
}
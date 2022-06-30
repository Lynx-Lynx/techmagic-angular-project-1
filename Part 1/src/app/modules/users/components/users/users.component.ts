import { Component, OnInit } from '@angular/core';
import { IUser, IOrder, UsersService } from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private _usersService: UsersService) {}
  value = '';
  selectedValue = '';
  users:IUser[] = [];
  
  orders: IOrder[] = [
    {value: 'fn-0', viewValue: 'by first name'},
    {value: 'ln-1', viewValue: 'by last name'}
  ];

  setValue() {
    this.value = '';
  }

  selectAllUsers() {
    this._usersService.selectAllUsers(this.users);
  }

  deleteUser() {
    this._usersService.deleteUsers(this.users);
    this.setValue();
  }

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }
  
}

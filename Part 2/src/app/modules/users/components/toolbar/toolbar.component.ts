import { IUser } from 'src/app/userInterface';
import { Component, OnInit } from '@angular/core';
import { IOrder, UsersService } from '../../../../services/users.service';
import { APIService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  constructor(private _usersService: UsersService, private _apiService: APIService) {}
  value = '';
  selectedValue = '';
  users: IUser[] = [];
  
  orders: IOrder[] = [
    {value: 'fn-0', viewValue: 'by first name'},
    {value: 'ln-1', viewValue: 'by last name'}
  ];

  setInputValue() {
    this._usersService.inputChanges(this.value);
  }

  setInputSelectValue() {
    this._usersService.inputSelectChanges(this.selectedValue);
  }

  setValue() {
    this.value = '';
    this._usersService.shareClearInput(this.value);
  }

  selectAllUsers() {
    this._usersService.selectAllUsers(this.users);
  }

  deleteUser() {
    for (let user of this.users) {
      if (user.isSelected) {
        this._apiService.deleteUsers(user.id).subscribe(response => response);
      }
    }
    this._usersService.deleteUsers(this.users);
    this.setValue();
  }

  ngOnInit(): void {
    this._usersService.usersList.subscribe(data => this.users = data);
  }
  
}

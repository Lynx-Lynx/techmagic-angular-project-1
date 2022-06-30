import { Injectable, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/userInterface';

export interface IOrder {
  value: string;
  viewValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  inputSource: EventEmitter<string> = new EventEmitter();
  inputSelect: EventEmitter<string> = new EventEmitter();
  usersList: EventEmitter<IUser[]> = new EventEmitter();
  inputClear: EventEmitter<string> = new EventEmitter();

  inputChanges(text:string) {
    this.inputSource.emit(text);
  }

  inputSelectChanges(value:string) {
    this.inputSelect.emit(value);
  }

  shareUsers(users: IUser[]) {
    this.usersList.emit(users);
  }

  shareClearInput(value: string) {
    this.inputClear.emit(value);
  }
 
  selectAllUsers(arr:IUser[]) {
    if (arr.some(user => !user.isSelected)) {
      return arr.map(user => user.isSelected = true);
    }
  
    if (arr.every(user => user.isSelected)) {
      return arr.map(user => user.isSelected = false);
    }
    return arr;
  }
  
  deleteUsers(arr:IUser[]) {
    if (arr.every(user => !user.isSelected)) {
      console.log('nothing to delete')
      return;
    }
  
    if (arr.every(user => user.isSelected)) {
      return arr.length = 0;
    }
  
    for (let user of arr) {
      if (user.isSelected) {
        arr.splice(arr.indexOf(user), 1);
      }
    }
    return arr;
  }
}

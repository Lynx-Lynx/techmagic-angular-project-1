import { Injectable } from '@angular/core';

export interface IUser {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  isSelected: boolean
}

export interface IOrder {
  value: string;
  viewValue: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor() { }

  getUsers(){
    return [
      {
        id: 1,
        firstname: 'Dora',
        lastname: 'Wright',
        email: 'dora.wright@gmail.com',
        phone: '+380660000000',
        isSelected: false
      },
      {
        id: 2,
        firstname: 'Martin',
        lastname: 'King',
        email: 'martin.king@gmail.com',
        phone: '+380660000001',
        isSelected: false
      },
      {
        id: 3,
        firstname: 'Greg',
        lastname: 'Maroney',
        email: 'greg.maroney@gmail.com',
        phone: '+380660000002',
        isSelected: false
      },
      {
        id: 4,
        firstname: 'Billy',
        lastname: 'Milligan',
        email: 'billy.milligan@gmail.com',
        phone: '+380660000003',
        isSelected: false
      },
      {
        id: 5,
        firstname: 'Brian',
        lastname: 'Woods',
        email: 'brian@gmail.com',
        phone: '+380660000004',
        isSelected: false
      },
    ];
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

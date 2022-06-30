import { IUser } from 'src/app/userInterface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  getFirstName(name: string) {
    return name.split(' ')[0];
  }

  getLastName(name: string) {
    return name.split(' ')[1];
  }

  transform(usersArr: IUser[], value: string) {
    if (value === 'fn-0') {
      return usersArr.sort(((a, b) => this.getFirstName(a.name).localeCompare(this.getFirstName(b.name))));
    }
    if (value === 'ln-1') {
      return usersArr.sort(((a, b) => this.getLastName(a.name).localeCompare(this.getLastName(b.name))));
    }
    return usersArr;
  }

}

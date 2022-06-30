import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modules/users/users.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(usersArr: IUser[], value: string) {
    value = value.toLowerCase();
    if (value) {
      return usersArr.filter(user => user.firstname.toLowerCase().includes(value)
      || user.lastname.toLowerCase().includes(value));
    }
    return usersArr;
  }

}

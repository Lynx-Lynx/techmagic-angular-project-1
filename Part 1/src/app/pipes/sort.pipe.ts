import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modules/users/users.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(usersArr: IUser[], value: string) {
    if (value === 'fn-0') {
      return usersArr.sort(((a, b) => a.firstname.localeCompare(b.firstname)));
    }
    if (value === 'ln-1') {
      return usersArr.sort(((a, b) => a.lastname.localeCompare(b.lastname)));
    }
    return usersArr;
  }

}

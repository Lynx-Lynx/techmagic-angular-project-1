import { IUser } from 'src/app/userInterface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(usersArr: IUser[], value: string) {
    value = value.toLowerCase();
    if (value) {
      return usersArr.filter(user => user.name.toLowerCase().includes(value));
    }
    return usersArr;
  }

}

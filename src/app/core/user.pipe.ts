import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {
    if (!users || !searchText) {
      return users;
    }
    return users.filter(user => user.nombre.toLowerCase().includes(searchText.toLowerCase()));
  }

}

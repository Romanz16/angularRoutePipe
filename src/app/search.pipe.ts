import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: string, ...args: any[]): any {
    if (!value) { return []; };
    if (searchText === '') {
      return value;
    } else {
      searchText = searchText.toLowerCase();
      return value.filter(function (user: any) {
        const arr: any = Object.values(user);
        const str: string = arr.join('').toLowerCase()
        if (str.indexOf(searchText, 0) !== -1) {
          return user;
        }
      })
    }
  }

}

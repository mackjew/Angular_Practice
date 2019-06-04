import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(value: { instanceType: string, name: string, status: string, started: Date}[] ) : { instanceType: string, name: string, status: string, started: Date}[] {
    const rtn = [];
    return value.sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      }
      else if(a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

}

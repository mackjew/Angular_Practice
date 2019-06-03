import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReverse'
})
export class StringReversePipe implements PipeTransform {

  transform(value: any): any {
    const strVal: string = value as string;
    return strVal.split('').reverse().join('');
  }

}

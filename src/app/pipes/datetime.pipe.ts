import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return new Date(value).toLocaleString();
  }

}

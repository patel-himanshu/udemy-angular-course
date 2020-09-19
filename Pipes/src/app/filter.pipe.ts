import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string, propName: string): any {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filteredString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

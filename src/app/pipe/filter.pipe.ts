import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataArray: any, searchText: string): any {
    if (!searchText) {
      return dataArray
    }
    return dataArray.filter(item =>
      item.Mountain.indexOf(searchText) > -1
    )
      ;
  }

}

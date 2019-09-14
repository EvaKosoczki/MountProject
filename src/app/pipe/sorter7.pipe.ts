import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter7'
})
export class Sorter7Pipe implements PipeTransform {

  transform(dataArray: any): any {
    return dataArray.sort((a, b) => {
      
      return (a.Mountain.localeCompare(b.Mountain))
    })
      ;
  }

}

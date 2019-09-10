import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
  transform(dataArr, value) {
    return dataArr.filter(item => {
      return item.title.includes(value);
    })
  }
}

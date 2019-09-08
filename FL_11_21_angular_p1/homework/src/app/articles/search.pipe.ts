import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
  transform(dataArr, value) {
    return dataArr.filter(title => {
      return title.title.includes(value);
    })
  }
}

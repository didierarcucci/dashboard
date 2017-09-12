import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'Active'
})

@Injectable()
export class MyFilterPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
    return items.filter(item => item.id.indexOf(args[0]) !== -1);
  }

}

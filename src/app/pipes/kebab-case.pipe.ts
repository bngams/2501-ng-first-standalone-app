import { Pipe, PipeTransform } from '@angular/core';

// like @Component
@Pipe({
  name: 'kebabCase' // how to use | kebabCase
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }
}

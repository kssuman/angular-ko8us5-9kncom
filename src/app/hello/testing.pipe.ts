import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing',
})
export class TestingPipe implements PipeTransform {
  transform(value: string): string {
    return value + ' piped';
  }
}

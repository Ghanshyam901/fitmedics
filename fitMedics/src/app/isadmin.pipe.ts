import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdmin'
})
export class IsAdminPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? '<button>New Button</button>' : '<h1>Not an admin</h1>';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus',
  standalone: false
})
export class TaskStatusPipe implements PipeTransform {

  transform(isCompleted: boolean): string {
    return isCompleted ? 'Complited' : 'Pending';
  }

}

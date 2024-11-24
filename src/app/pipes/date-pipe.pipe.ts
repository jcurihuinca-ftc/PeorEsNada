import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }
}

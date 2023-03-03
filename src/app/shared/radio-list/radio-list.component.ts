import { Component } from '@angular/core';

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent {
  title: string = 'Тип'
  items = [
    {
      text: 'Не важно',
      isActive: true
    },
    {
      text: 'Аниме',
      isActive: false
    },
    {
      text: 'Манга',
      isActive: false
    }
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent {
  title: string = 'Формат'
  items: string[] = [
    'MOVIE',
    'TV'
  ]
}
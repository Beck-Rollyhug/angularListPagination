import {Component, EventEmitter, Input, Output} from '@angular/core';

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean
}

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent {
  @Output() handler: EventEmitter<Item[]> = new EventEmitter<Item[]>();
  @Input() title: string = 'Тип';
  @Input() items: Item[] = [
    {
      id: 0,
      text: 'Аниме',
      filterOption: 'ANIME',
      isChecked: true
    },
    {
      id: 1,
      text: 'Манга',
      filterOption: 'MANGA',
      isChecked: false
    }
  ];

  handleChange(id: number) {
    this.items.map(item => {
      if (item.isChecked)
        item.isChecked = false
      if (item.id == id)
        item.isChecked = true
      console.log(item)
    })
    this.handler.emit(this.items)
  }
}

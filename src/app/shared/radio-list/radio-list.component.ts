import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TYPE_OPTIONS} from "../../features/filtered-list/services/setupFilter";

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean,
  isDisabled: boolean
}

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent {
  @Output() handler: EventEmitter<Item[]> = new EventEmitter<Item[]>();
  @Input() title: string = 'Тип';
  items: Item[] = TYPE_OPTIONS;

  handleChange(id: number) {
    this.items.map(item => {
      if (item.isChecked)
        item.isChecked = false
      if (item.id == id)
        item.isChecked = true
    })
    this.handler.emit(this.items)
  }
}

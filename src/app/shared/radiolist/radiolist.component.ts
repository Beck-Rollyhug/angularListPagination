import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TYPE_OPTIONS} from "../../features/filteredlist/services/setupFilter";

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean,
  isDisabled: boolean
}

@Component({
  selector: 'RadioList',
  templateUrl: './radiolist.component.html',
  styleUrls: ['./radiolist.component.scss']
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

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FORMAT_OPTIONS} from "../../features/filteredlist/services/setupFilter";

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean,
  isDisabled: boolean
}

@Component({
  selector: 'CheckboxList',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.scss']
})
export class CheckboxlistComponent {
  @Output() handler: EventEmitter<Item[]> = new EventEmitter<Item[]>();
  @Input() title: string = 'Формат'
  items: Item[] = FORMAT_OPTIONS;

  handleChange(id: number) {
    this.items.map(item => {
      if (item.id == id)
        item.isChecked = !item.isChecked
    })
    this.handler.emit(this.items)
  }
}

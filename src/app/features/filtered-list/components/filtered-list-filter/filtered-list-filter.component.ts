import {Component, EventEmitter, Output} from '@angular/core';

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean
}

@Component({
  selector: 'filtered-list-filter',
  templateUrl: './filtered-list-filter.component.html',
  styleUrls: ['./filtered-list-filter.component.scss']
})
export class FilteredListFilterComponent {
  @Output() name: EventEmitter<string> = new EventEmitter<string>();
  @Output() format: EventEmitter<string> = new EventEmitter<string>();
  @Output() type: EventEmitter<string> = new EventEmitter<string>();

  updateName(value: string) { this.name.emit(value); }
  updateFormat() { this.format.emit(); }
  updateType(radioList: Item[]) {
    radioList.map(item => {
      if (item.isChecked) {
        this.type.emit(item.filterOption);
      }
    })
  }
}

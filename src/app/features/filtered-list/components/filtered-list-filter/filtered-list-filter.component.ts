import {Component, EventEmitter, Output} from '@angular/core';

type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean,
  isDisabled: boolean
}

@Component({
  selector: 'filtered-list-filter',
  templateUrl: './filtered-list-filter.component.html',
  styleUrls: ['./filtered-list-filter.component.scss']
})
export class FilteredListFilterComponent {
  @Output() filterBySearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterByFormat: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() filterByType: EventEmitter<string> = new EventEmitter<string>();

  updateName(value: string) {
    this.filterBySearch.emit(value);
  }

  updateFormat(checkboxList: Item[]) {
    const filters: string[] = [];
    checkboxList.map(item => {
      if (item.isChecked) {
        filters.push(item.filterOption)
      }
    })
    this.filterByFormat.emit(filters);
  }

  updateType(radioList: Item[]) {
    radioList.map(item => {
      if (item.isChecked) {
        this.filterByType.emit(item.filterOption);
      }
    })
  }
}

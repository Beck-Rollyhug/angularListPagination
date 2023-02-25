import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'filtered-list-filter',
  templateUrl: './filtered-list-filter.component.html',
  styleUrls: ['./filtered-list-filter.component.scss']
})
export class FilteredListFilterComponent {
  // TODO: поменять на rxjs
  filter: EventEmitter<string> = new EventEmitter<string>();

  updateFilterState(value: string) {
    this.filter.emit(value);
  }
}

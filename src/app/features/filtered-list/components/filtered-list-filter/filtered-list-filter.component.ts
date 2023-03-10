import {Component, EventEmitter} from '@angular/core';
import {of, tap} from "rxjs";

@Component({
  selector: 'filtered-list-filter',
  templateUrl: './filtered-list-filter.component.html',
  styleUrls: ['./filtered-list-filter.component.scss']
})
export class FilteredListFilterComponent {
  // TODO: поменять на rxjs
  filter: EventEmitter<string> = new EventEmitter<string>();
  nameInput: EventEmitter<string> = new EventEmitter<string>();


  updateFilterState(value: string) {
    this.filter.emit(value);
  }

  handleInputChange() {
    const nameInput = document.getElementById('name')
    of(nameInput)
      .pipe(
        tap( value =>
          console.log('nameInput:', value)
        )
      )
  }
}

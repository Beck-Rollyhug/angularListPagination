import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filtered-list-filter',
  templateUrl: './filtered-list-filter.component.html',
  styleUrls: ['./filtered-list-filter.component.scss']
})
export class FilteredListFilterComponent {
  @Output() name: EventEmitter<string> = new EventEmitter<string>();
  @Output() format: EventEmitter<string> = new EventEmitter<string>();
  @Output() type: EventEmitter<string> = new EventEmitter<string>();

  updateName(value: string) {
    // const inputName = document.getElementById("nameInput")
    console.log('change name')
    this.name.emit(value);
  }

  updateFormat() {
    console.log('change format')
    this.format.emit();
  }

  updateType() {
    console.log('change type')
    this.type.emit();
  }
}

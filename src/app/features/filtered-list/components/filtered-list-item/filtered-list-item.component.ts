import { Component, Input } from "@angular/core";
import {ItemFilteredList} from "../../../../core/types/ItemFilteredList";

@Component({
  selector: 'filtered-list-item',
  templateUrl: './filtered-list-item.component.html',
  styleUrls: ['./filtered-list-item.component.scss']
})
export class FilteredListItemComponent {
  @Input() item: ItemFilteredList;
  constructor() {
    this.item = {
      id: 0,
      title: {
        english: ' '
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: '',
      },
      meanScore: 0,
      genres: ''
    }
  }
}

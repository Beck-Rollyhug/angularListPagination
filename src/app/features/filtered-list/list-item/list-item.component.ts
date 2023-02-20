import { Component, Input } from "@angular/core";
import {ItemFilteredList} from "../../../core/types/ItemFilteredList";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: ItemFilteredList = {
    id: 0,
    title: {
      english: ''
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
  constructor() {}
}

import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import fetchFilteredList from "./services/fetchFilteredList";

@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  filteredList: ItemFilteredList[] = []

  constructor() {
    fetchFilteredList()
      .then(data => {
        this.filteredList.push(data)
      })
  }
}

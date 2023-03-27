import { Component, Input } from "@angular/core";
import {ItemFilteredList} from "../../../../core/types/ItemFilteredList";
import {DEFAULT_LIST_ITEM} from "../../services/constants";

@Component({
  selector: 'FilteredList-item',
  templateUrl: './filteredlist-item.component.html',
  styleUrls: ['./filteredlist-item.component.scss']
})
export class FilteredlistItemComponent {
  @Input() isLoading: boolean = true;
  @Input() item: ItemFilteredList = DEFAULT_LIST_ITEM;
  constructor() {}
}

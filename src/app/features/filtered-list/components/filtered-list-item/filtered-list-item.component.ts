import { Component, Input } from "@angular/core";
import {ItemFilteredList} from "../../../../core/types/ItemFilteredList";
import {DEFAULT_LIST_ITEM} from "../../services/constants";

@Component({
  selector: 'filtered-list-item',
  templateUrl: './filtered-list-item.component.html',
  styleUrls: ['./filtered-list-item.component.scss']
})
export class FilteredListItemComponent {
  @Input() isLoading: boolean = true;
  @Input() item: ItemFilteredList = DEFAULT_LIST_ITEM;
  constructor() {}
}

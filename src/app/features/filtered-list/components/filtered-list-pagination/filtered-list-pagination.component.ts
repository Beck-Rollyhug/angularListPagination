import { Component, Input } from "@angular/core";

@Component({
  selector: 'filtered-list-pagination',
  templateUrl: './filtered-list-pagination.component.html',
  styleUrls: ['./filtered-list-pagination.component.scss']
})
export class FilteredListPaginationComponent {
  @Input() currentPage: number = 0
  @Input() hasNextPage: boolean = false
  constructor() {}
}

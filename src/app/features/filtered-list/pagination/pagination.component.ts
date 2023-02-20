import { Component, Input } from "@angular/core";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 0
  @Input() hasNextPage: boolean = false
  constructor() {}
}

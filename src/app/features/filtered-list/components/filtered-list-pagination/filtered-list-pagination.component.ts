import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'filtered-list-pagination',
  templateUrl: './filtered-list-pagination.component.html',
  styleUrls: ['./filtered-list-pagination.component.scss']
})
export class FilteredListPaginationComponent {
  @Input() currentPage: number = 0
  @Input() hasNextPage: boolean = false

  @Output() handlerNextPage = new EventEmitter();
  @Output() handlerPreviousPage = new EventEmitter();

  handleClickNextPage() {
    this.handlerNextPage.emit();
  }

  handleClickPreviousPage() {
    if (this.currentPage > 1) {
      this.handlerPreviousPage.emit();
    }
  }
}

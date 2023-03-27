import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'FilteredList-pagination',
  templateUrl: './filteredlist-pagination.component.html',
  styleUrls: ['./filteredlist-pagination.component.scss']
})
export class FilteredlistPaginationComponent {
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

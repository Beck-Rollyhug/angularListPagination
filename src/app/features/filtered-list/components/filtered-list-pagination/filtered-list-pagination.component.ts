import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'filtered-list-pagination',
  templateUrl: './filtered-list-pagination.component.html',
  styleUrls: ['./filtered-list-pagination.component.scss']
})
export class FilteredListPaginationComponent {
  @Input() currentPage: number = 0
  @Input() hasNextPage: boolean = false

  @Output() handlerNextPage = new EventEmitter();

  pagination$ = new Observable(subscriber => {
    subscriber.next()
  })

  handleClickNextPage() {
    this.handlerNextPage.emit();
    // this.pagination$.subscribe({
    //   next() {
    //
    //   }
    // });
  }

  handleClickPreviousPage() {
    this.pagination$.subscribe({
      next() {
        console.log('Previous page');
      }
    });
  }


}

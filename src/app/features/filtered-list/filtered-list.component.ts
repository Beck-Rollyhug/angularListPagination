import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import {Pagination} from "../../core/types/Pagination";
import getFilteredListPreloader, {
  DEFAULT_TOTAL_PAGES,
  DEFAULT_CURRENT_PAGE,
  DEFAULT_LAST_PAGE,
  DEFAULT_HAS_NEXT_PAGE,
  DEFAULT_ITEMS_PER_PAGE
} from "./services/defaults";
import setConfig from "../../core/headers/graphQL";
import {QUERY} from "./services/request/query";
import {catchError, map, of, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {FILTERED_LIST_URL} from "../../core/constants/fetchURLs";


@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  filteredListPreloader: ItemFilteredList[] = getFilteredListPreloader(5);
  filteredList: ItemFilteredList[] = this.filteredListPreloader;
  totalPages = DEFAULT_TOTAL_PAGES;
  currentPage = DEFAULT_CURRENT_PAGE;
  lastPage = DEFAULT_LAST_PAGE;
  hasNextPage = DEFAULT_HAS_NEXT_PAGE;
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE;

  getFilteredList(page: number) {
    const config = setConfig(QUERY, {
      page: page,
      perPage: 5
    })
    fromFetch(FILTERED_LIST_URL, config)
      .pipe(
        switchMap(res => {
          if (res.ok) {
            return res.json()
          }
          return of({ error: true, message: `Error ${ res.status }` })
        }),
        catchError(err => { throw err.message }),
        map(data => {
          const page = data.data.Page
          this.setPagination(page.pageInfo);
          this.setList(page.media);
        })
      )
      .subscribe()
  }

  constructor() {
    this.getFilteredList(this.currentPage);
  }

  setList(data: ItemFilteredList[]) {
    this.filteredList = []
    data.map((item: ItemFilteredList) => {
      this.filteredList.push(item);
    })
  }

  setPagination(pageInfo: Pagination) {
    this.totalPages = pageInfo.total;
    this.currentPage = pageInfo.currentPage;
    this.lastPage = pageInfo.lastPage;
    this.hasNextPage = pageInfo.hasNextPage;
    this.itemsPerPage = pageInfo.perPage;
  }

  updatePage(newPage: number) {
    this.currentPage = newPage;
    this.filteredList = this.filteredListPreloader
    this.getFilteredList(newPage);
  }
}

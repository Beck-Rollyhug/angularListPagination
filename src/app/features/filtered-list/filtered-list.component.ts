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
import {catchError, map, of, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {FILTERED_LIST_URL} from "../../core/constants/fetchURLs";
import fetchFilteredList from "./services/fetchFilteredList";


@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  DEFAULT_SEARCH: string = '';
  DEFAULT_FORMAT: string = '';
  DEFAULT_TYPE: string = '';

  filteredListPreloader: ItemFilteredList[] = getFilteredListPreloader(5);
  filteredList: ItemFilteredList[] = this.filteredListPreloader;
  totalPages = DEFAULT_TOTAL_PAGES;
  currentPage = DEFAULT_CURRENT_PAGE;
  lastPage = DEFAULT_LAST_PAGE;
  hasNextPage = DEFAULT_HAS_NEXT_PAGE;
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE;

  getFilteredList(
    search: string,
    format: string,
    type: string,
    page: number
  ) {
    const config = setConfig(page, search, format, type)
    fromFetch(FILTERED_LIST_URL, config)
      .pipe(
        switchMap(res => {
          if (res.ok) { return res.json() }
          else { return of({error: true, message: `Error ${res.status}`}) }
        }),
        catchError(err => {
          throw err.message
        }),
        map(data => {
          const page = data.data.Page
          this.setPagination(page.pageInfo);
          this.setList(page.media);
        })
      )
      .subscribe()
    // of(fetchFilteredList(page))
    //   .pipe(
    //     map(data => {
    //       this.setPagination(data.pageInfo);
    //       this.setList(data.media);
    //     })
    //   )
    //   .subscribe()
  }

  constructor() {
    this.getFilteredList(
      this.DEFAULT_SEARCH,
      this.DEFAULT_FORMAT,
      this.DEFAULT_TYPE,
      this.currentPage
    );
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
    this.getFilteredList(
      this.DEFAULT_SEARCH,
      this.DEFAULT_FORMAT,
      this.DEFAULT_TYPE,
      newPage
    );
  }

  updateName(name: string) {
    this.getFilteredList(name, 'MOVIE', 'ANIME', 0)
  }

  // updateList(name: string, format: string, type: string) {
  //   this.getFilteredList(name, format, type, 0)
  // }
}

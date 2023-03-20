import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import { Pagination } from "../../core/types/Pagination";
import { DEFAULT_LIST, DEFAULT_FILTER } from "./services/constants";
import { FilterInfo } from "../../core/types/FilterInfo";
import fetchFilteredList from "./services/fetchFilteredList";

@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  isLoading: boolean;
  filteredList: ItemFilteredList[];
  filter: FilterInfo;

  setList(data: ItemFilteredList[]) {
    this.filteredList = []
    data.map((item: ItemFilteredList) => this.filteredList.push(item))
  }

  setPagination(pageInfo: Pagination) {
    this.filter.pagination.total = pageInfo.total;
    this.filter.pagination.currentPage = pageInfo.currentPage;
    this.filter.pagination.lastPage = pageInfo.lastPage;
    this.filter.pagination.hasNextPage = pageInfo.hasNextPage;
    this.filter.pagination.perPage = pageInfo.perPage;
  }

  getFilteredList() {
    this.isLoading = true;
    this.filteredList = DEFAULT_LIST
    fetchFilteredList(this.filter)
      .then(obs => obs.subscribe(page => {
        this.setPagination(page.pageInfo);
        this.setList(page.media);
        this.isLoading = false;
      }))
  }

  constructor() {
    this.isLoading = true
    this.filteredList = DEFAULT_LIST;
    this.filter = DEFAULT_FILTER
    this.getFilteredList();
  }

  updateToNextPage() {
    this.filter.pagination.currentPage += 1;
    this.getFilteredList()
  }

  updateToPreviousPage() {
    this.filter.pagination.currentPage -= 1;
    this.getFilteredList()
  }

  updateName(name: string) {
    this.filter.search = name
    this.filter.pagination.currentPage = 1
    this.getFilteredList()
  }
}

import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import { Pagination } from "../../core/types/Pagination";
import { DEFAULT_LIST, DEFAULT_FILTER } from "./services/constants";
import { FilterInfo } from "../../core/types/FilterInfo";
import fetchFilteredList from "./services/fetchFilteredList";
import {FORMAT_OPTIONS} from "./services/setupFilter";


@Component({
  selector: 'FilteredList',
  templateUrl: './filteredlist.component.html',
  styleUrls: ['./filteredlist.component.scss']
})
export class FilteredListComponent {
  isLoading: boolean;
  filteredList: ItemFilteredList[];
  filter: FilterInfo;

  setList(data: ItemFilteredList[]) {
    this.filteredList = []
    data.map((item: ItemFilteredList) => {
      FORMAT_OPTIONS.map(option => {
        if (item.format == option.filterOption)
          item.format = option.text
      })
      this.filteredList.push(item)
    })
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
      .then(obs => obs.subscribe(data => {
        this.setPagination(data.Page.pageInfo);
        this.setList(data.Page.media);
        this.isLoading = false;
      }))
  }

  constructor() {
    this.isLoading = true
    this.filteredList = DEFAULT_LIST;
    this.filter = DEFAULT_FILTER
    this.getFilteredList();
  }

  goToNextPage() {
    this.filter.pagination.currentPage += 1;
    this.getFilteredList()
  }

  goToPreviousPage() {
    this.filter.pagination.currentPage -= 1;
    this.getFilteredList()
  }

  filterByName(name: string) {
    this.filter.search = name
    this.filter.pagination.currentPage = 1
    this.getFilteredList()
  }

  filterByFormat(format: string[]) {
    this.filter.format = format
    this.filter.pagination.currentPage = 1
    this.getFilteredList()
  }

  filterByType(type: string) {
    this.filter.type = type
    this.filter.pagination.currentPage = 1
    this.getFilteredList()
  }
}

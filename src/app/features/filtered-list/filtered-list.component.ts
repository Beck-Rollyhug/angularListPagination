import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import fetchFilteredList from "./services/fetchFilteredList";
// import {map, Observable, Observer} from "rxjs";
import {Pagination} from "../../core/types/Pagination";

@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  filteredListPreloader: ItemFilteredList[] = [
    {
      id: 1,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    },
    {
      id: 2,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    },
    {
      id: 3,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    },
    {
      id: 4,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    },
    {
      id: 5,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    }
  ];
  filteredList: ItemFilteredList[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  lastPage: number = 0;
  hasNextPage: boolean = false;
  itemsPerPage: number = 0;

  // pagination$ = new Observable(handlers => {
  //   handlers.next((value: {}) => {
  //
  //   })
  // });

  getList(page: number) {
    this.filteredList = this.filteredListPreloader;
    fetchFilteredList(page)
      .then((data) => {
        this.setPagination(data.pageInfo);
        this.setList(data.media);
      })
  }

  constructor() {
    this.getList(this.currentPage);
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
    this.getList(newPage);
  }
}

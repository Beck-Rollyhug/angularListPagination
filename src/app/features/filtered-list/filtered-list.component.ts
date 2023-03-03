import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import fetchFilteredList from "./services/fetchFilteredList";

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
  ]
  filteredList: ItemFilteredList[] = this.filteredListPreloader
  totalPages: number = 0
  currentPage: number = 1
  lastPage: number = 0
  hasNextPage: boolean = false
  itemsPerPage: number = 0

  constructor() {
    this.getList()
  }

  getList() {
    fetchFilteredList(this.currentPage)
      .then(data => {
        this.totalPages = data.Page.pageInfo.total
        this.currentPage = data.Page.pageInfo.currentPage
        this.lastPage = data.Page.pageInfo.lastPage
        this.hasNextPage = data.Page.pageInfo.hasNextPage
        this.itemsPerPage = data.Page.pageInfo.perPage

        const newFilteredList: ItemFilteredList[] = data.Page.media
        this.filteredList = []
        for (let i = 0; i < newFilteredList.length; i++) {
          this.filteredList.push(newFilteredList[i])
        }
      })
  }

  getNextPage() {
    this.currentPage += 1
    this.filteredList = this.filteredListPreloader
    this.getList()
  }

  getPreviousPage() {
    this.currentPage -= 1
    this.filteredList = this.filteredListPreloader
    this.getList()
  }
}

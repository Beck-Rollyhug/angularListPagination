import { Component } from "@angular/core";
import { ItemFilteredList } from '../../core/types/ItemFilteredList';
import fetchFilteredList from "./services/fetchFilteredList";

@Component({
  selector: 'filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent {
  filteredList: ItemFilteredList[] = []
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
        for (let i = 0; i < newFilteredList.length; i++) {
          this.filteredList.push(newFilteredList[i])
        }
      })
  }

  getNextPage() {
    this.currentPage += 1
    this.filteredList = []
    this.getList()
  }
}

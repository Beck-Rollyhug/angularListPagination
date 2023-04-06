import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListComponent } from "./filteredlist.component";
import { FilteredlistPaginationComponent } from "./components/filteredlist-pagination/filteredlist-pagination.component";
import { FilteredlistItemComponent } from "./components/filteredlist-item/filteredlist-item.component";
import { FilteredlistFilterComponent } from "./components/filteredlist-filter/filteredlist-filter.component";
import { CheckboxlistComponent } from "../../shared/checkboxlist/checkboxlist.component";
import { RadioListComponent } from "../../shared/radiolist/radiolist.component";
import { AttributeComponent } from "../../shared/attribute/attribute.component";
import { ItemFilteredList } from "../../core/types/ItemFilteredList";
import { Pagination } from "../../core/types/Pagination";

describe('FilteredListComponent', () => {
  let component: FilteredListComponent;
  let fixture: ComponentFixture<FilteredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilteredListComponent,
        FilteredlistItemComponent,
        FilteredlistFilterComponent,
        FilteredlistPaginationComponent,
        AttributeComponent,
        CheckboxlistComponent,
        RadioListComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredListComponent);
    component = fixture.debugElement.componentInstance;
    component.filteredList = []
  });

  it('should create instance.', () => {
    expect(component).toBeTruthy();
  });

  it('should setup list', () => {
    const fakeData : ItemFilteredList[] = [
      {
        id: 0,
        title: {
          english: 'should setup filteredList',
          native: 'should setup filteredList'
        },
        format: 'TV',
        type: 'ANIME',
        startDate: {
          year: '2001',
          month: '08',
          day: '14'
        },
        averageScore: 100,
        genres: 'handsome team_player knows_html knows_css knows_js_ts knows_frameworks'
      },
      {
        id: 1,
        title: {
          english: 'should setup filteredList',
          native: 'should setup filteredList'
        },
        format: 'TV',
        type: 'ANIME',
        startDate: {
          year: '2001',
          month: '08',
          day: '14'
        },
        averageScore: 99,
        genres: 'team_player knows_html knows_css knows_js_ts knows_frameworks'
      }
    ]
    component.setList(fakeData)
    expect(component.filteredList.length).toBe(fakeData.length)
    expect(component.filteredList[0].title.english).toBe(fakeData[0].title.english)
    expect(component.filteredList[1].title.english).toBe(fakeData[1].title.english)
  })

  it('should setup pagination', () => {
    const fakePageInfo : Pagination = {
        total: 10,
        currentPage: 5,
        lastPage: 4,
        hasNextPage: true,
        perPage: 3
      }
    component.setPagination(fakePageInfo)
    expect(component.filter.pagination.total).toBe(fakePageInfo.total)
    expect(component.filter.pagination.currentPage).toBe(fakePageInfo.currentPage)
    expect(component.filter.pagination.lastPage).toBe(fakePageInfo.lastPage)
    expect(component.filter.pagination.hasNextPage).toBe(fakePageInfo.hasNextPage)
    expect(component.filter.pagination.perPage).toBe(fakePageInfo.perPage)
  })
});

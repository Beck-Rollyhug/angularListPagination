import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredlistPaginationComponent } from "./filteredlist-pagination.component";

describe('FilteredlistPaginationComponent', () => {
  let component: FilteredlistPaginationComponent;
  let fixture: ComponentFixture<FilteredlistPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredlistPaginationComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredlistPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

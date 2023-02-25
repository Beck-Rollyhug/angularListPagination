import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListFilterComponent } from './filtered-list-filter.component';

describe('FilterComponent', () => {
  let component: FilteredListFilterComponent;
  let fixture: ComponentFixture<FilteredListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

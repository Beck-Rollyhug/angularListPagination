import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListComponent } from "../filteredlist.component";

describe('FilteredListComponent', () => {
  let component: FilteredListComponent;
  let fixture: ComponentFixture<FilteredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredListComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

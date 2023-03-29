import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredlistItemComponent } from "./filteredlist-item.component";

describe('FilteredlistItemComponent', () => {
  let component: FilteredlistItemComponent;
  let fixture: ComponentFixture<FilteredlistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredlistItemComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

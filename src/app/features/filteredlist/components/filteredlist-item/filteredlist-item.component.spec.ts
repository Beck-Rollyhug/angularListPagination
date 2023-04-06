import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredlistItemComponent } from "./filteredlist-item.component";
import { AttributeComponent } from "../../../../shared/attribute/attribute.component";

describe('FilteredlistItemComponent', () => {
  let component: FilteredlistItemComponent;
  let fixture: ComponentFixture<FilteredlistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilteredlistItemComponent,
        AttributeComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

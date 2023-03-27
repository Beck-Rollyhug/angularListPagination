import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredlistFilterComponent } from './filteredlist-filter.component';
import { CheckboxlistComponent } from "../../../../shared/checkboxlist/checkboxlist.component";
import { RadioListComponent } from "../../../../shared/radiolist/radiolist.component";

describe('FilterComponent', () => {
  let component: FilteredlistFilterComponent;
  let fixture: ComponentFixture<FilteredlistFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilteredlistFilterComponent,
        CheckboxlistComponent,
        RadioListComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredlistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilteredListComponent } from "../../features/filteredlist/filteredlist.component";
import {FilteredlistItemComponent} from "../../features/filteredlist/components/filteredlist-item/filteredlist-item.component";
import {AttributeComponent} from "../../shared/attribute/attribute.component";
import {FilteredlistPaginationComponent} from "../../features/filteredlist/components/filteredlist-pagination/filteredlist-pagination.component";
import {FilteredlistFilterComponent} from "../../features/filteredlist/components/filteredlist-filter/filteredlist-filter.component";
import {CheckboxlistComponent} from "../../shared/checkboxlist/checkboxlist.component";
import {RadioListComponent} from "../../shared/radiolist/radiolist.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FilteredListComponent,
        FilteredlistItemComponent,
        AttributeComponent,
        FilteredlistPaginationComponent,
        FilteredlistFilterComponent,
        CheckboxlistComponent,
        RadioListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

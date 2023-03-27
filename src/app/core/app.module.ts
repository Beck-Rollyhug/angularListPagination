import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app/app.component';
import { FilteredListComponent } from "../features/filteredlist/filteredlist.component";
import { AttributeComponent } from "../shared/attribute/attribute.component";
import { FilteredlistPaginationComponent } from "../features/filteredlist/components/filteredlist-pagination/filteredlist-pagination.component";
import { FilteredlistItemComponent } from "../features/filteredlist/components/filteredlist-item/filteredlist-item.component";
import { FilteredlistFilterComponent } from '../features/filteredlist/components/filteredlist-filter/filteredlist-filter.component';
import { CheckboxlistComponent } from "../shared/checkboxlist/checkboxlist.component";
import { RadioListComponent } from "../shared/radiolist/radiolist.component";

@NgModule({
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
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

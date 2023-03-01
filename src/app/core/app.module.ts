import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilteredListComponent } from "../features/filtered-list/filtered-list.component";
import { AttributeComponent } from "../shared/attribute/attribute.component";
import { FilteredListPaginationComponent } from "../features/filtered-list/components/filtered-list-pagination/filtered-list-pagination.component";
import { FilteredListItemComponent } from "../features/filtered-list/components/filtered-list-item/filtered-list-item.component";
import { FilteredListFilterComponent } from '../features/filtered-list/components/filtered-list-filter/filtered-list-filter.component';
import {CheckboxListComponent} from "../shared/checkbox-list/checkbox-list.component";

@NgModule({
  declarations: [
    AppComponent,
    FilteredListComponent,
    FilteredListItemComponent,
    AttributeComponent,
    FilteredListPaginationComponent,
    FilteredListFilterComponent,
    CheckboxListComponent
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

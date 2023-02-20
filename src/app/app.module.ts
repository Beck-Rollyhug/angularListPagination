import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilteredListComponent } from "./features/filtered-list/filtered-list.component";
import {AttributeComponent} from "./shared/attribute/attribute.component";
import {PaginationComponent} from "./features/filtered-list/pagination/pagination.component";
import {ListItemComponent} from "./features/filtered-list/list-item/list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    FilteredListComponent,
    ListItemComponent,
    AttributeComponent,
    PaginationComponent
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

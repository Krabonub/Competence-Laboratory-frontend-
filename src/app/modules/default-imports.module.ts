import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from "./material.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { LocalStorageService } from '../services/local-storage.service';

@NgModule({
  providers: [
    LocalStorageService
  ],
  imports: [
    CommonModule,
    DragulaModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    DragulaModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class DefaultImportsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { DragulaModule } from 'ng2-dragula';

import { MaterialModule } from "./material.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { LocalStorageService } from '../services/local-storage.service';
import { PositionService } from '../services/position.service';
import { UserService } from '../services/user.service';

@NgModule({
  providers: [
    LocalStorageService,
    PositionService,
    UserService
  ],
  imports: [
    CommonModule,
    DragulaModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    DragulaModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
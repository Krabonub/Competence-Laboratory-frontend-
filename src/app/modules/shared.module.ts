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
import { CompetenceGroupService } from '../services/competenceGroup.service';
import { CompetenceService } from '../services/competence.service';
import { LevelService } from '../services/level.service';
import { CompetenceLevelRequirementService } from '../services/competenceLevelRequirements.service';
import { MarkInputDirective } from '../directives/mark-input.directive';
import { ConfirmationComponent } from '../components/dialogues/confirmation/confirmation.component';

@NgModule({
  providers: [
    LocalStorageService,
    PositionService,
    UserService,
    CompetenceGroupService,
    CompetenceService,
    LevelService,
    CompetenceLevelRequirementService
  ],
  declarations: [
    MarkInputDirective,
    ConfirmationComponent
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
  entryComponents: [
    ConfirmationComponent
  ],
  exports: [
    CommonModule,
    DragulaModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkInputDirective,
    ConfirmationComponent
  ]
})
export class SharedModule { }

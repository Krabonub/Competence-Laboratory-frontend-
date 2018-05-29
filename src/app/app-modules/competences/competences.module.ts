import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';

import { PositionsComponent } from './components/routes/positions/positions.component';
import { CompetenceGroupsComponent } from './components/routes/competence-groups/competence-groups.component';
import { CompetenceListComponent } from './components/routes/competence-list/competence-list.component';
import { LevelMatrixComponent } from './components/routes/level-matrix/level-matrix.component';
import { AddCompetenceComponent } from './components/dialogues/add-competence/add-competence.component';
import { EditCompetenceComponent } from './components/dialogues/edit-competence/edit-competence.component';
import { AddCompetenceGroupComponent } from './components/dialogues/add-competence-group/add-competence-group.component';
import { EditCompetenceGroupComponent } from './components/dialogues/edit-competence-group/edit-competence-group.component';
import { AddPositionComponent } from './components/dialogues/add-position/add-position.component';
import { EditPositionComponent } from './components/dialogues/edit-position/edit-position.component';
import { DeleteCompetenceGroupComponent } from './components/dialogues/delete-competence-group/delete-competence-group.component';
import { DeleteCompetenceComponent } from './components/dialogues/delete-competence/delete-competence.component';
import { DeletePositionComponent } from './components/dialogues/delete-position/delete-position.component';

export const CompetencesModuleRoutes: Routes = [
  { path: "competences/positions", component: PositionsComponent },
  { path: "competences/competence-groups", component: CompetenceGroupsComponent },
  { path: "competences/competence-list", component: CompetenceListComponent },
  { path: "competences/level-matrix", component: LevelMatrixComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(CompetencesModuleRoutes)
  ],
  declarations: [
    PositionsComponent,
    CompetenceGroupsComponent,
    CompetenceListComponent,
    LevelMatrixComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    AddCompetenceGroupComponent,
    EditCompetenceGroupComponent,
    AddPositionComponent,
    EditPositionComponent,
    DeleteCompetenceGroupComponent,
    DeleteCompetenceComponent,
    DeletePositionComponent
  ],
  entryComponents: [
    AddCompetenceComponent,
    EditCompetenceComponent,
    AddCompetenceGroupComponent,
    EditCompetenceGroupComponent,
    AddPositionComponent,
    EditPositionComponent,
    DeleteCompetenceGroupComponent,
    DeleteCompetenceComponent,
    DeletePositionComponent
  ]
})
export class CompetencesModule { }


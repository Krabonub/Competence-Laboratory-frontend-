import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DefaultImportsModule } from '../../modules/default-imports.module';

import { PositionsComponent } from './components/routes/positions/positions.component';
import { CompetenceGroupsComponent } from './components/routes/competence-groups/competence-groups.component';
import { CompetenceListComponent } from './components/routes/competence-list/competence-list.component';
import { LevelMatrixComponent } from './components/routes/level-matrix/level-matrix.component';

export const CompetencesModuleRoutes: Routes = [
  { path: "competences/positions", component: PositionsComponent },
  { path: "competences/competence-groups", component: CompetenceGroupsComponent },
  { path: "competences/competence-list", component: CompetenceListComponent },
  { path: "competences/level-matrix", component: LevelMatrixComponent }
]

@NgModule({
  imports: [
    DefaultImportsModule,
    RouterModule.forChild(CompetencesModuleRoutes)
  ],
  declarations: [
    PositionsComponent,
    CompetenceGroupsComponent,
    CompetenceListComponent,
    LevelMatrixComponent
  ]
})
export class CompetencesModule { }


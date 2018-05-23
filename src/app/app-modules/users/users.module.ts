import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DefaultImportsModule } from '../../modules/default-imports.module';

import { ManageUsersComponent } from './components/routes/manage-users/manage-users.component';
import { EvaluationsComponent } from './components/routes/evaluations/evaluations.component';

export const UsersModuleRoutes: Routes = [
  { path: "users/manage-users", component: ManageUsersComponent },
  { path: "users/evaluations", component: EvaluationsComponent }
]

@NgModule({
  imports: [
    DefaultImportsModule,
    RouterModule.forChild(UsersModuleRoutes)
  ],
  declarations: [ManageUsersComponent, EvaluationsComponent]
})
export class UsersModule { }

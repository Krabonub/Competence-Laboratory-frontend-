import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';

import { ManageUsersComponent } from './components/routes/manage-users/manage-users.component';
import { EvaluationsComponent } from './components/routes/evaluations/evaluations.component';
import { AddUserComponent } from './components/dialogues/add-user/add-user.component';

export const UsersModuleRoutes: Routes = [
  { path: "users/manage-users", component: ManageUsersComponent },
  { path: "users/evaluations", component: EvaluationsComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(UsersModuleRoutes)
  ],
  declarations: [
    ManageUsersComponent,
    EvaluationsComponent,
    AddUserComponent
  ],
  entryComponents: [
    AddUserComponent
  ]
})
export class UsersModule { }

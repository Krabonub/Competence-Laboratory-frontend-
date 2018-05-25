import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';

import { ManageUsersComponent } from './components/routes/manage-users/manage-users.component';
import { EvaluationsComponent } from './components/routes/evaluations/evaluations.component';
import { AddUserComponent } from './components/dialogues/add-user/add-user.component';
import { EditUserComponent } from './components/dialogues/edit-user/edit-user.component';
import { AddEvaluationComponent } from './components/dialogues/add-evaluation/add-evaluation.component';
import { EditEvaluationComponent } from './components/dialogues/edit-evaluation/edit-evaluation.component';
import { DeleteUserComponent } from './components/dialogues/delete-user/delete-user.component';

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
    AddUserComponent,
    EditUserComponent,
    AddEvaluationComponent,
    EditEvaluationComponent,
    DeleteUserComponent
  ],
  entryComponents: [
    AddUserComponent,
    EditUserComponent,
    AddEvaluationComponent,
    EditEvaluationComponent,
    DeleteUserComponent
  ]
})
export class UsersModule { }

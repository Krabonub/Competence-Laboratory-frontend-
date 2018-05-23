import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultImportsModule } from './modules/default-imports.module';
import { CompetencesModule, CompetencesModuleRoutes } from './app-modules/competences/competences.module';
import { UsersModule, UsersModuleRoutes } from './app-modules/users/users.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/routes/login/login.component';
import { NotFoundComponent } from './components/routes/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CompetencesModule,
    UsersModule,
    RouterModule.forRoot(appRoutes),
    DefaultImportsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

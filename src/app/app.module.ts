import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './modules/shared.module';
import { CompetencesModule, CompetencesModuleRoutes } from './app-modules/competences/competences.module';
import { UsersModule, UsersModuleRoutes } from './app-modules/users/users.module';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/routes/not-found/not-found.component';
import { LoginComponent } from './components/routes/login/login.component';
import { LandingComponent } from './components/routes/landing/landing.component';


const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CompetencesModule,
    UsersModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    LandingComponent
  ],
  entryComponents: [],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userLinks = [
    {
      path: "users/manage-users",
      label: "Manage Users"
    },
    {
      path: "users/evaluations",
      label: "Evaluations"
    }
  ];
  public competencesLinks = [
    {
      path: "competences/positions",
      label: "Positions"
    },
    {
      path: "competences/competence-groups",
      label: "Competence Groups"
    },
    {
      path: "competences/competence-list",
      label: "Competence List"
    },
    {
      path: "competences/level-matrix",
      label: "Level Matrix"
    }
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  isAuthentificated() {
    return !!this.localStorageService.userEmail;
  }

  logOut() {
    this.authService.logOut().subscribe(
      (res) => {
        this.localStorageService.clearLocalStorage();
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

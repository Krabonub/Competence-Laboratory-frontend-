import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

class Link {
  public path: string;
  public label: string;
  constructor({ path, label }: Link) {
    this.path = path;
    this.label = label;
  }
}

class Rubric {
  rubricName: string;
  links: Link[];
  constructor({ rubricName, links }: Rubric) {
    this.rubricName = rubricName;
    this.links = links;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public rubrics: Rubric[] = [
    {
      rubricName: "Users",
      links: [
        {
          path: "users/manage-users",
          label: "Manage Users"
        },
        {
          path: "users/evaluations",
          label: "Evaluations"
        }
      ]
    },
    {
      rubricName: "Competences",
      links: [
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
      ]
    }
  ];

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

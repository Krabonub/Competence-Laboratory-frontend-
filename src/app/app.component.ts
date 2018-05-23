import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    
  }
}

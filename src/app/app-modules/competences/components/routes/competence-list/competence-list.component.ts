import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { Competence } from '../../../../../models/competence';
import { CompetenceService } from '../../../../../services/competence.service';

import { AddCompetenceComponent } from '../../dialogues/add-competence/add-competence.component';
import { EditCompetenceComponent } from '../../dialogues/edit-competence/edit-competence.component';
import { DeleteCompetenceComponent } from '../../dialogues/delete-competence/delete-competence.component';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { CompetenceGroup } from '../../../../../models/competenceGroup';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.scss']
})
export class CompetenceListComponent implements OnInit {
  public dataSource: MatTableDataSource<Competence> = new MatTableDataSource();
  public displayedColumns = ["competenceName", "competenceGroup", "actions"];
  public competenceGroups: CompetenceGroup[] = [];
  public selectedGroup: string = "all";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private competenceService: CompetenceService,
    private competenceGroupService: CompetenceGroupService,
    public dialog: MatDialog
  ) {
    this.getAllCompetenceGroups();
    this.resetDataSource();
  }

  ngOnInit() {
  }

  public addCompetence() {
    let dialogRef = this.dialog.open(AddCompetenceComponent, {
      data: { competenceGroups: this.competenceGroups }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public editCompetence(comp: Competence) {
    let dialogRef = this.dialog.open(EditCompetenceComponent, {
      data: comp
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public deleteCompetence(comp: Competence) {
    let dialogRef = this.dialog.open(DeleteCompetenceComponent, {
      data: comp
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  private getAllCompetenceGroups() {
    this.competenceGroupService.getAllCompetenceGroups().subscribe(
      (competenceGroupList: CompetenceGroup[]) => {
        this.competenceGroups = competenceGroupList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public selectCompetenceGroup() {
    this.resetDataSource();
  }

  private resetDataSource() {
    this.competenceService.getCompetencesByGroup({ query: this.selectedGroup }).subscribe(
      (competenceList: Competence[]) => {
        this.dataSource = new MatTableDataSource(competenceList);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

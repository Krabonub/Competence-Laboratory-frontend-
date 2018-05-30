import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';

import { CompetenceGroup } from '../../../../../models/competenceGroup';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';

import { AddCompetenceGroupComponent } from '../../dialogues/add-competence-group/add-competence-group.component';
import { EditCompetenceGroupComponent } from '../../dialogues/edit-competence-group/edit-competence-group.component';
import { DeleteCompetenceGroupComponent } from '../../dialogues/delete-competence-group/delete-competence-group.component';

@Component({
  selector: 'app-competence-groups',
  templateUrl: './competence-groups.component.html',
  styleUrls: ['./competence-groups.component.scss']
})
export class CompetenceGroupsComponent implements OnInit {
  dataSource: MatTableDataSource<CompetenceGroup> = new MatTableDataSource();
  displayedColumns = ["competenceGroupName", "actions"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private competenceGroupService: CompetenceGroupService,
    public dialog: MatDialog
  ) {
    this.resetDataSource();
  }

  ngOnInit() {
  }

  public addCompetenceGroup() {
    let dialogRef = this.dialog.open(AddCompetenceGroupComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public editCompetenceGroup(group: CompetenceGroup) {
    let dialogRef = this.dialog.open(EditCompetenceGroupComponent, {
      data: group
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public deleteCompetenceGroup(group: CompetenceGroup) {
    let dialogRef = this.dialog.open(DeleteCompetenceGroupComponent, {
      data: group
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  private resetDataSource() {
    this.competenceGroupService.getAllCompetenceGroups().subscribe(
      (competenceGroupList: CompetenceGroup[]) => {
        this.dataSource = new MatTableDataSource(competenceGroupList);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

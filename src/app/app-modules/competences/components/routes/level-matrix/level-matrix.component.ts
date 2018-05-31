import { Component, OnInit } from '@angular/core';

import { PositionService } from '../../../../../services/position.service';
import { Position } from '../../../../../models/position';
import { CompetenceGroup } from '../../../../../models/competenceGroup';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { Level } from '../../../../../models/level';
import { LevelService } from '../../../../../services/level.service';

@Component({
  selector: 'app-level-matrix',
  templateUrl: './level-matrix.component.html',
  styleUrls: ['./level-matrix.component.scss']
})
export class LevelMatrixComponent implements OnInit {
  selectedPosition: Position;
  selectedCompetenceGroup: CompetenceGroup;
  allPositions: Position[] = [];
  allCompetenceGroups: CompetenceGroup[] = [];
  allLevels: Level[] = [];
  positionCompetenceGroups: CompetenceGroup[] = [];

  constructor(
    public positionService: PositionService,
    public competenceGroupService: CompetenceGroupService,
    public levelService: LevelService
  ) {
  }

  ngOnInit() {
    this.getPositions();
    this.getAllLevels();
  }

  getPositions() {
    this.positionService.getAllPositions().subscribe(
      (positionList) => {
        this.allPositions = positionList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public selectPosition(position) {
    this.getPositionCompetenceGroups();
    this.getAdditionalCompetenceGroups(position);
  }

  public getAdditionalCompetenceGroups(selectedPosition) {
    this.competenceGroupService.getExcept(selectedPosition.competenceGroups).subscribe(
      (competenceGroupList) => {
        this.allCompetenceGroups = competenceGroupList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public addCompetenceGroup() {
    if (this.selectedPosition && this.selectedCompetenceGroup) {
      this.positionService.addCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroup: this.selectedCompetenceGroup._id }).subscribe(
        (position) => {
          this.getAdditionalCompetenceGroups(position);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  public deleteCompetenceGroup(groupId) {
    if (this.selectedPosition) {
      this.positionService.deleteCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroup: groupId }).subscribe(
        (position) => {
          this.getAdditionalCompetenceGroups(position);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  private getPositionCompetenceGroups() {

  }

  private getAllLevels() {
    this.levelService.getAllLevels().subscribe(
      (levels: Level[]) => {
        this.allLevels = levels;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  public saveCompetenceLevelRequirements() {

  }
}

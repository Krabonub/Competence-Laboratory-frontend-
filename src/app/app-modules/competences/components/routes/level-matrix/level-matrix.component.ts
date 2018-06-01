import { Component, OnInit } from '@angular/core';

import { PositionService } from '../../../../../services/position.service';
import { Position, LevelRequirementsCompetenceGroup } from '../../../../../models/position';
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
  additionalCompetenceGroups: CompetenceGroup[] = [];
  allLevels: Level[] = [];
  levelRequirementsCompetenceGroups: LevelRequirementsCompetenceGroup[] = [];

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

  public refreshMatrix(position) {
    this.getLevelMatrix();
    this.getAdditionalCompetenceGroups(position);
    this.selectedCompetenceGroup = null;
  }

  public getAdditionalCompetenceGroups(selectedPosition) {
    this.competenceGroupService.getExcept(Position.getPositionGroups(selectedPosition)).subscribe(
      (competenceGroupList) => {
        this.additionalCompetenceGroups = competenceGroupList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public addCompetenceGroup() {
    if (this.selectedPosition && this.selectedCompetenceGroup) {
      this.positionService.addCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroupId: this.selectedCompetenceGroup._id }).subscribe(
        (position) => {
          this.refreshMatrix(position);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  public deleteCompetenceGroup(groupId) {
    if (this.selectedPosition) {
      this.positionService.deleteCompetenceGroup({ positionId: this.selectedPosition._id, levelRequirementsCompetenceGroupId: groupId }).subscribe(
        (position) => {
          this.refreshMatrix(position);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  private getLevelMatrix() {
    this.positionService.getLevelMatrix({ positionId: this.selectedPosition._id }).subscribe(
      (position: Position) => {
        this.levelRequirementsCompetenceGroups = position.levelRequirementsCompetenceGroups;
        console.log(position);
      },
      (error) => {
        console.error(error);
      }
    );
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

import { Component, OnInit } from '@angular/core';

import { PositionService } from '../../../../../services/position.service';
import { Position } from '../../../../../models/position';
import { CompetenceGroup } from '../../../../../models/competenceGroup';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { Level } from '../../../../../models/level';
import { LevelService } from '../../../../../services/level.service';
import { CompetenceLevelRequirementService } from '../../../../../services/competenceLevelRequirements.service';


@Component({
  selector: 'app-level-matrix',
  templateUrl: './level-matrix.component.html',
  styleUrls: ['./level-matrix.component.scss']
})
export class LevelMatrixComponent implements OnInit {
  allLevels: Level[] = [];
  allPositions: Position[] = [];
  additionalCompetenceGroups: CompetenceGroup[] = [];
  selectedCompetenceGroup;
  selectedPosition;
  dataSource = [];

  constructor(
    public positionService: PositionService,
    public competenceGroupService: CompetenceGroupService,
    public levelService: LevelService,
    public competenceLevelRequirementService: CompetenceLevelRequirementService
  ) {
  }

  ngOnInit() {
    this.getPositions();
    this.getLevels();
  }

  getPositions() {
    this.positionService.getAllPositions().subscribe(
      (positions) => {
        console.log(positions);
        this.allPositions = positions;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLevels() {
    this.levelService.getAllLevels().subscribe(
      (levels) => {
        console.log(levels);
        this.allLevels = levels;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAdditionalCompetenceGroups() {
    this.competenceGroupService.getExcept({ except: this.selectedPosition.competenceGroups.map((group) => { return group._id }) }).subscribe(
      (groups) => {
        console.log(groups);
        this.additionalCompetenceGroups = groups;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectPosition() {
    this.getAdditionalCompetenceGroups();
    this.getCompetenceLevelRequirements();
  }

  addCompetenceGroup() {
    this.positionService.addCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroupId: this.selectedCompetenceGroup._id }).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCompetenceGroup(competenceGroupId) {
    this.positionService.deleteCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroupId }).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCompetenceLevelRequirements() {
    this.competenceLevelRequirementService.getRequirements({ positionId: this.selectedPosition._id }).subscribe(
      (requirements) => {
        var competencesObj = {};
        var competenceGroupsObj = {};
        requirements.forEach((requirement) => {
          if (!competencesObj[requirement.competence._id]) {
            competencesObj[requirement.competence._id] = {
              competence: requirement.competence,
              requirements: []
            };
          }
          competencesObj[requirement.competence._id].requirements.push(requirement);
        });
        var competences = Object.values(competencesObj);
        competences.forEach((competence: any) => {
          if (!competenceGroupsObj[competence.competence.competenceGroup._id]) {
            competenceGroupsObj[competence.competence.competenceGroup._id] = {
              competenceGroup: competence.competence.competenceGroup,
              competences: []
            }
          }
          competenceGroupsObj[competence.competence.competenceGroup._id].competences.push(competence);
        });
        this.dataSource = Object.values(competenceGroupsObj);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveCompetenceLevelRequirements() {
    this.competenceLevelRequirementService.editRequirements({ positionId: this.selectedPosition._id }).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

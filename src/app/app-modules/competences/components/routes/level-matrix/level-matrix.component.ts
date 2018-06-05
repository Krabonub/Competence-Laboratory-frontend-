import { Component, OnInit } from '@angular/core';

import { PositionService } from '../../../../../services/position.service';
import { Position } from '../../../../../models/position';
import { CompetenceGroup } from '../../../../../models/competenceGroup';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { Level } from '../../../../../models/level';
import { LevelService } from '../../../../../services/level.service';
import { CompetenceLevelRequirementService, editRequirement } from '../../../../../services/competenceLevelRequirements.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CompetenceLevelRequirement } from '../../../../../models/competenceLevelRequirement';

/*function inRange(input: FormControl) {
  if (input.value === null || input.value < 0 || input.value > 4 || input.value % 1) {
    return { outOfRange: true };
  }
  return null;
}*/

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
  allRequrements: CompetenceLevelRequirement[] = [];
  markInputFormGroup: FormGroup;


  constructor(
    public positionService: PositionService,
    public competenceGroupService: CompetenceGroupService,
    public levelService: LevelService,
    public competenceLevelRequirementService: CompetenceLevelRequirementService
  ) {
    this.markInputFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.getPositions();
    this.getLevels();
  }

  getPositions() {
    this.positionService.getAllPositions().subscribe(
      (positions) => {
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
        this.additionalCompetenceGroups = groups;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectPosition() {
    this.refreshDataSource();
  }

  addCompetenceGroup() {
    this.positionService.addCompetenceGroup({ positionId: this.selectedPosition._id, competenceGroupId: this.selectedCompetenceGroup._id }).subscribe(
      (res) => {
        console.log(res);
        this.refreshDataSource();
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
        this.refreshDataSource();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCompetenceLevelRequirements() {
    this.competenceLevelRequirementService.getRequirements({ positionId: this.selectedPosition._id }).subscribe(
      (requirements) => {
        this.allRequrements = requirements;
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
        console.log(this.dataSource);
        this.generateForm(this.dataSource);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateForm(dataSource) {
    var formObject = {};
    this.allRequrements.forEach((requirement) => {
      formObject[requirement._id] = new FormControl(requirement.mark/*, inRange*/);
    });
    this.markInputFormGroup = new FormGroup(formObject);
    console.log(this.markInputFormGroup);
  }

  refreshDataSource() {
    this.getCompetenceLevelRequirements();
    this.getAdditionalCompetenceGroups();
  }

  saveCompetenceLevelRequirements() {
    var controls = this.markInputFormGroup.controls;
    var requirementsToEdit: editRequirement[] = [];
    for (let key in controls) {
      requirementsToEdit.push({ _id: key, mark: controls[key].value });
    }
    this.competenceLevelRequirementService.editRequirements(requirementsToEdit).subscribe(
      (res) => {
        console.log(res);
        this.refreshDataSource();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

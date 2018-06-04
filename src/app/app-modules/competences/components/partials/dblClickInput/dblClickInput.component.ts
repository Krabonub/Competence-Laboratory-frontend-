import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CompetenceLevelRequirementService } from '../../../../../services/competenceLevelRequirements.service';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dblCkickInput',
  templateUrl: './dblClickInput.component.html',
  styleUrls: ['./dblClickInput.component.scss']
})
export class DblClickInput implements OnInit {
  mark;
  editorMode = false;
  @Input() levelRequirement;

  constructor(
    public competenceLevelRequirementService: CompetenceLevelRequirementService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.mark = this.levelRequirement.mark;
  }

  validate(value) {
    console.log(isNaN(value));
  }

  changeMode() {
    this.editorMode = !this.editorMode;
  }
}

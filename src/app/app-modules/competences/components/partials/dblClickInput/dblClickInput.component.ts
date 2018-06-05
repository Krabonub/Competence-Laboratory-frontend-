import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';

import { CompetenceLevelRequirementService } from '../../../../../services/competenceLevelRequirements.service';
import { Validators, FormControl, FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { CompetenceLevelRequirement } from '../../../../../models/competenceLevelRequirement';

@Component({
  selector: 'app-dblCkickInput',
  templateUrl: './dblClickInput.component.html',
  styleUrls: ['./dblClickInput.component.scss']
})
export class DblClickInput implements OnInit {
  editorMode: boolean = false;
  @Input() levelRequirement: CompetenceLevelRequirement;
  @Input() parentFormGroup: FormGroup;
  model: number;

  constructor() { }

  ngOnInit() {
    this.model = this.levelRequirement.mark;
  }

  onInput(event) {
    if (event.data !== null) {
      this.model = 0;
      setTimeout(() => { this.model = event.data }, 0);
    }
  }

  changeMode() {
    this.editorMode = !this.editorMode;
    console.log(this.editorMode);
  }
}

import { Component, OnInit } from '@angular/core';

import { PositionService } from '../../../../../services/position.service';
import { Position } from '../../../../../models/position';

@Component({
  selector: 'app-level-matrix',
  templateUrl: './level-matrix.component.html',
  styleUrls: ['./level-matrix.component.scss']
})
export class LevelMatrixComponent implements OnInit {

  constructor(
    public positionService: PositionService
  ) { }

  ngOnInit() {
  }

  addCompetenceGroup() {
    this.positionService.
  }

}

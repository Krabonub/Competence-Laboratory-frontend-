import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../models/user';
import { Evaluation, Mark } from '../../../../../models/evaluation';
import { PositionService } from '../../../../../services/position.service';
import { UserService } from '../../../../../services/user.service';
import { Position } from '../../../../../models/position';
import { EvaluationService } from '../../../../../services/evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

  allPositions: Position[];
  selectedPosition: any;
  positionUsers: User[];
  selectedUsers: any;
  evaluations: Evaluation[];
  competecneGroups

  constructor(
    private positionService: PositionService,
    private userService: UserService,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit() {
    this.getPositions();
  }

  private handleUserSelect(event) {

    this.selectedUsers = [];
  }

  public selectPosition() {
    this.selectedUsers = [];
    this.getUsers();
  }

  public selectUsers() {

  }

  public sellectAllUsers() {
    if (this.selectedUsers.indexOf("all") === -1) {
      this.selectedUsers = [];
    }
    else {
      this.selectedUsers = ["all"].concat(this.positionUsers);
    }
  }

  public addEvaluation() {
  }

  private getPositions() {
    this.positionService.getAllPositions().subscribe(
      (positions) => {
        this.allPositions = positions;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getUsers() {
    var query = null;
    if (this.selectedPosition !== "all") {
      query = { position: this.selectedPosition._id };
    }
    this.userService.getUsersByQuery(query).subscribe(
      (users: User[]) => {
        this.positionUsers = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getEvaluations(userIds) {
    ///////////////////////////////////
    /*this.evaluationService.getByUsers(userIds).subscribe(
      () => { },
      (error) => {
        console.log(error);
      }
    )*/
  }
}

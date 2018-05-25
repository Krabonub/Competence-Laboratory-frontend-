import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { PositionService } from '../../../../../services/position.service';
import { UserService } from '../../../../../services/user.service';
import { Position } from '../../../../../models/position';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  positions: Array<Position> = [];
  filteredPositions$: Observable<Array<Position>>;

  constructor(
    private formBuilder: FormBuilder,
    private positionService: PositionService,
    private userService: UserService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editUserForm = formBuilder.group({
      "email": [data.email, [Validators.required, Validators.email]],
      "firstName": [data.firstName, [Validators.required]],
      "lastName": [data.lastName, [Validators.required]],
      "position": [data.position.positionName, [Validators.required]]
    });
    this.positionService.getAllPositions().subscribe(
      (positions) => {
        this.positions = positions;
        this.filteredPositions$ = this.editUserForm.controls.position.valueChanges.pipe(
          startWith(''),
          map((state: any) => {
            return state ? this.filterPositions(state) : this.positions.slice();
          })
        );
      },
      (error) => {
        this.positions = [];
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.editUserForm.controls.position.value);
    this.userService.edituser({
      email: this.editUserForm.controls.email.value,
      firstName: this.editUserForm.controls.firstName.value,
      lastName: this.editUserForm.controls.lastName.value,
      position: this.editUserForm.controls.position.value,
      userId: this.data._id
    }).subscribe(
      (user) => {
        console.log(user);
        this.dialogRef.close();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public filterPositions(filter: string): Position[] {
    return this.positions.filter((position: Position) => {
      return position.positionName.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    });
  }
}

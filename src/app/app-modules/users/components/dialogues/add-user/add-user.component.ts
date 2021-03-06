import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


import { Position } from '../../../../../models/position';
import { PositionService } from '../../../../../services/position.service';
import { UserService } from '../../../../../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  positions: Array<Position> = [];
  filteredPositions$: Observable<Array<Position>>;

  constructor(
    private formBuilder: FormBuilder,
    private positionService: PositionService,
    private userService: UserService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addUserForm = formBuilder.group({
      "email": ["", [Validators.required, Validators.email]],
      "firstName": ["", [Validators.required]],
      "lastName": ["", [Validators.required]],
      "position": ["", [Validators.required]]
    });
    this.positionService.getAllPositions().subscribe(
      (positions) => {
        this.positions = positions;
        this.filteredPositions$ = this.addUserForm.controls.position.valueChanges.pipe(
          startWith(''),
          map((state: any) => {
            return state ? this.filterPositions(state) : this.positions;
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
    this.userService.adduser({
      email: this.addUserForm.controls.email.value,
      firstName: this.addUserForm.controls.firstName.value,
      lastName: this.addUserForm.controls.lastName.value,
      position: this.addUserForm.controls.position.value
    }).subscribe(
      (user) => {
        this.dialogRef.close();
        console.log(user);
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
    return this.positions.filter((position) => {
      return position.positionName.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    });
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatSort, } from '@angular/material';

import { UserService } from '../../../../../services/user.service';

import { AddUserComponent } from '../../dialogues/add-user/add-user.component';
import { User } from '../../../../../models/user';
import { EditUserComponent } from '../../dialogues/edit-user/edit-user.component';
import { DeleteUserComponent } from '../../dialogues/delete-user/delete-user.component';
import { AddEvaluationComponent } from '../../dialogues/add-evaluation/add-evaluation.component';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  displayedColumns = ['lastName', 'firstName', 'email', 'position', 'level', 'actions'];
  dataSource = new MatTableDataSource<User>();
  tableFilter: string = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.resetDataSource();
  }

  ngOnInit() {
  }

  public addUser() {
    let dialogRef = this.dialog.open(AddUserComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetDataSource();
    });
  }

  public editUser(user) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetDataSource();
    });

  }

  public deleteUser(user) {
    let dialogRef = this.dialog.open(DeleteUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetDataSource();
    });
  }

  public evaluateUser(user) {
    let dialogRef = this.dialog.open(AddEvaluationComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetDataSource();
    });
  }

  public resetDataSource() {
    this.userService.getAllusers().subscribe(
      (userList) => {
        this.dataSource = new MatTableDataSource(userList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (item, filter) => {
          var filterArr = filter.split(" ");
          var isRegular = false;
          filterArr.forEach((filt) => {
            if ((item.firstName.toLocaleLowerCase().indexOf(filt) !== -1) || (item.lastName.toLocaleLowerCase().indexOf(filt) !== -1)) {
              isRegular = true;
            }
          });
          return isRegular;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

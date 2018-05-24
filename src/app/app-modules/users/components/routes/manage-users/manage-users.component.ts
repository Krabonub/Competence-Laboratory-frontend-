import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddUserComponent } from '../../dialogues/add-user/add-user.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addUser() {
    let dialogRef = this.dialog.open(AddUserComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }
}

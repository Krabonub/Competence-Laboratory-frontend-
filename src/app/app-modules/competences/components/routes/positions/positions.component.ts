import { Component, OnInit, ViewChild } from '@angular/core';

import { Position } from '../../../../../models/position';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PositionService } from '../../../../../services/position.service';
import { AddPositionComponent } from '../../dialogues/add-position/add-position.component';
import { EditPositionComponent } from '../../dialogues/edit-position/edit-position.component';
import { DeletePositionComponent } from '../../dialogues/delete-position/delete-position.component';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  dataSource: MatTableDataSource<Position> = new MatTableDataSource();
  displayedColumns = ["positionName", "actions"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private positionService: PositionService,
    public dialog: MatDialog
  ) {
    this.resetDataSource();
  }

  ngOnInit() {
  }

  public addPosition() {
    let dialogRef = this.dialog.open(AddPositionComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public editPosition(position: Position) {
    let dialogRef = this.dialog.open(EditPositionComponent, {
      data: position
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  public deletePosition(position: Position) {
    let dialogRef = this.dialog.open(DeletePositionComponent, {
      data: position
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetDataSource();
      }
    });
  }

  private resetDataSource() {
    this.positionService.getAllPositions().subscribe(
      (positionList: Position[]) => {
        this.dataSource = new MatTableDataSource(positionList);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

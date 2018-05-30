import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PositionService } from '../../../../../services/position.service';

@Component({
  selector: 'app-delete-position',
  templateUrl: './delete-position.component.html',
  styleUrls: ['./delete-position.component.scss']
})
export class DeletePositionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePositionComponent>,
    public positionService: PositionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.positionService.deletePosition({ positionId: this.data._id }).subscribe(
      (position) => {
        this.dialogRef.close(true);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}

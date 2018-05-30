import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PositionService } from '../../../../../services/position.service';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.scss']
})
export class EditPositionComponent implements OnInit {
  editPositionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditPositionComponent>,
    public positionService: PositionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editPositionForm = formBuilder.group({
      "positionName": [this.data.positionName, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.positionService.editPosition({
      positionName: this.editPositionForm.controls.positionName.value,
      positionId: this.data._id
    }).subscribe(
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

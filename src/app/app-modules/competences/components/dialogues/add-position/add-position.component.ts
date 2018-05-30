import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PositionService } from '../../../../../services/position.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent implements OnInit {
  addPositionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPositionComponent>,
    public positionService: PositionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addPositionForm = formBuilder.group({
      "positionName": ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.positionService.addPosition({
      positionName: this.addPositionForm.controls.positionName.value
    }).subscribe(
      (position) => {
        console.log(position);
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

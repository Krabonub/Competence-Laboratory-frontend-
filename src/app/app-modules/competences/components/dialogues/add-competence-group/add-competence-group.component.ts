import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';

@Component({
  selector: 'app-add-competence-group',
  templateUrl: './add-competence-group.component.html',
  styleUrls: ['./add-competence-group.component.scss']
})
export class AddCompetenceGroupComponent implements OnInit {
  addCompetenceGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCompetenceGroupComponent>,
    public competenceGroupService: CompetenceGroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addCompetenceGroupForm = formBuilder.group({
      "groupName": ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.competenceGroupService.addCompetenceGroup({
      competenceGroupName: this.addCompetenceGroupForm.controls.groupName.value
    }).subscribe(
      (cG) => {
        console.log(cG);
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

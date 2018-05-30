import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompetenceService } from '../../../../../services/competence.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {
  editCompetenceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditCompetenceComponent>,
    public competenceGroupService: CompetenceGroupService,
    public competenceService: CompetenceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editCompetenceForm = formBuilder.group({
      "competenceName": [data.competence.competenceName, [Validators.required]],
      "description": [data.competence.description, [Validators.required]],
      "competenceGroup": [data.competence.competenceGroup._id, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.competenceService.editCompetence({
      competenceName: this.editCompetenceForm.controls.competenceName.value,
      description: this.editCompetenceForm.controls.description.value,
      competenceGroup: this.editCompetenceForm.controls.competenceGroup.value,
      competenceId: this.data._id
    }).subscribe(
      (comp) => {
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

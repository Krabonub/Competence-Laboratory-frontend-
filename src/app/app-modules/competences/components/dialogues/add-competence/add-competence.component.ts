import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';
import { CompetenceService } from '../../../../../services/competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {
  addCompetenceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCompetenceComponent>,
    public competenceGroupService: CompetenceGroupService,
    public competenceService: CompetenceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addCompetenceForm = formBuilder.group({
      "competenceName": ["", [Validators.required]],
      "description": ["", [Validators.required]],
      "competenceGroup": ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.competenceService.addCompetence({
      competenceName: this.addCompetenceForm.controls.competenceName.value,
      description: this.addCompetenceForm.controls.description.value,
      competenceGroup: this.addCompetenceForm.controls.competenceGroup.value
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

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';

@Component({
  selector: 'app-edit-competence-group',
  templateUrl: './edit-competence-group.component.html',
  styleUrls: ['./edit-competence-group.component.scss']
})
export class EditCompetenceGroupComponent implements OnInit {
  editCompetenceGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditCompetenceGroupComponent>,
    public competenceGroupService: CompetenceGroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editCompetenceGroupForm = formBuilder.group({
      "groupName": [data.competenceGroupName, [Validators.required]]
    });
  }

  ngOnInit() {
    console.log(this.data);
  }

  public onSubmit() {
    this.competenceGroupService.editCompetenceGroup({
      competenceGroupName: this.editCompetenceGroupForm.controls.groupName.value,
      competenceGroupId: this.data._id
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CompetenceGroupService } from '../../../../../services/competenceGroup.service';

@Component({
  selector: 'app-delete-competence-group',
  templateUrl: './delete-competence-group.component.html',
  styleUrls: ['./delete-competence-group.component.scss']
})
export class DeleteCompetenceGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCompetenceGroupComponent>,
    public competenceGroupService: CompetenceGroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.competenceGroupService.deleteCompetenceGroup({ competenceGroupId: this.data._id }).subscribe(
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

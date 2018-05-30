import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompetenceService } from '../../../../../services/competence.service';

@Component({
  selector: 'app-delete-competence',
  templateUrl: './delete-competence.component.html',
  styleUrls: ['./delete-competence.component.scss']
})
export class DeleteCompetenceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCompetenceComponent>,
    public competenceService: CompetenceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.competenceService.deleteCompetence({ competenceId: this.data._id }).subscribe(
      (competence) => {
        console.log(competence);
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

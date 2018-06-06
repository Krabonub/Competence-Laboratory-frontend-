export class Mark {
  value: number;
  competence: string;
}

export class Evaluation {
  _id?: string;
  user: string;
  evaluationDate: Date;
  comment: string;
  marks: Mark[];
}
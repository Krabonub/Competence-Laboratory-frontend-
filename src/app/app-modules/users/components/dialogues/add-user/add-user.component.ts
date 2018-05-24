import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  positions$: Observable<Array<Position>>;

  constructor(private formBuilder: FormBuilder) {
    this.addUserForm = formBuilder.group({
      "email": ["", [Validators.required, Validators.email]],
      "password": ["", [Validators.required]],
      "firstName": ["", [Validators.required]],
      "lastName": ["", [Validators.required]],
      "position": ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

}

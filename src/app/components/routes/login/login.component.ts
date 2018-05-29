import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { LocalStorageService } from '../../../services/local-storage.service';

import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    "email": new FormControl(
      "",
      [
        Validators.required,
        Validators.email
      ]
    ),
    "password": new FormControl(
      "",
      [
        Validators.required
      ]
    ),
  });

  constructor(
    private authService: AuthService,
    public localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.logIn({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }).subscribe((user: User) => {
        this.localStorageService.setUserToLocalstorage(user);
        console.log(user);
      }, (error) => {
        console.error(error);
      });
    }
  }
}

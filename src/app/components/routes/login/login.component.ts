import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.logIn({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }).subscribe((user) => {
        console.log(user);
      }, (error) => {
        console.error(error);
      });
    }
  }
}

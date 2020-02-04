import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from '../Entities/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.createForm({
    username: "",
    password: ""
  });

  constructor(private fb: FormBuilder, private apiService: AuthenticationService, private router: Router) {
  }

  private createForm(model: Login): FormGroup {
    return this.fb.group(model);
  }

  private updateForm(model: Partial<Login>): void {
    this.loginForm.patchValue(model)
  }

  ok() {
    this.apiService.authenticate(this.loginForm.value).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['policies']);
    }, err => {
      //localStorage.removeItem('token');
      console.log(err);
      alert('Usuario ')
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private fomrBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fomrBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(){
    this.router.navigateByUrl('home');
  }

  register() {
    this.router.navigateByUrl('login/cadastro');
  }

}

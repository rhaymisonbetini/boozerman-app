import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('login/login');
  }

}

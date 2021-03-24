import { Component, OnInit } from '@angular/core';
import { Simulate, Profile } from 'src/database/simulate';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public itens: Array<Profile>;

  constructor(
    private simulate: Simulate
  ) { }

  ngOnInit() {
    this.itens = this.simulate.profile;
  }

}

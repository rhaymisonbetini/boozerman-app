import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Simulate } from 'src/database/simulate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    Geolocation,
    Simulate
  ],
  declarations: [HomePage]
})
export class HomePageModule { }

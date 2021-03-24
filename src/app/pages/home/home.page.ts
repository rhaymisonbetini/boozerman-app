import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Simulate, Destaque, Bar, Last } from 'src/database/simulate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  map: L.Map
  newMarker: any;
  address: string[];

  public photoImg = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLp1mb1DRNtwMz0XGolS_WTdFgrLnjsGCudw&usqp=CAU" height="40px" width="100%"/>';
  public photoImg2 = '<img src="https://mercadaomaringa.com.br/wp-content/uploads/2019/11/boteco2.jpg" height="40px" width="100%"/>';

  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;


  //fakedatas
  public emphasis: Array<Destaque>;
  public bars: Array<Bar>;
  public lasts: Array<Last>;

  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private simulate: Simulate
  ) { }

  ngOnInit() {
    this.emphasis = this.simulate.emphasis;
    this.bars = this.simulate.bars
    this.lasts = this.simulate.last;
  }

  ionViewDidEnter() {
    this.getGeolocation();
  }

  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true }).then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;
      setTimeout(() => {
        this.loadMap();
      }, 500)
    }).catch((error) => {
    });
  }


  loadMap() {

    this.map = L.map("map", {
      center: [this.latitude, this.longitude],
      zoom: 13,
      renderer: L.canvas()
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
    L.popup()
      .setLatLng([this.latitude, this.longitude])
      .setContent("<center>Bar do zé </center>" + "</br>" + this.photoImg)
      .openOn(this.map);

    L.popup()
      .setLatLng([-10.8851535, -37.0747029])
      .setContent("<center>Bar do militar </center>" + "</br>" + this.photoImg2)
      .addTo(this.map);

  }

  profile() {
    this.router.navigateByUrl('profile');
  }
}


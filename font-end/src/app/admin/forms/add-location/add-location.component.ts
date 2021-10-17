import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare let longdo: any;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {
  constructor() {}

  latitudeOn: any;
  longitudeOn: any;
  addLocation = new FormGroup({
    locationName: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  });

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitudeOn = position.coords.latitude
      this.longitudeOn = position.coords.longitude
      let map = new longdo.Map({
        placeholder: document.getElementById('map'),
        zoom: 18,
        lastView: false,
        location: {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        },
      });

      // let marker = new longdo.Marker({
      //   lon: this.longitudeOn,
      //   lat: this.latitudeOn,
      // });
      // map.Overlays.add(marker);
    });
  }

  add() {
    console.log(this.addLocation.value);
    // this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }

  checkLocation() {
    console.log('map ready');
    let map = new longdo.Map({
      placeholder: document.getElementById('map'),
      zoom: 18,
      lastView: false,
      location: {
        lon: this.longitudeOn,
        lat: this.latitudeOn,
      },
    });
    let marker = new longdo.Marker({
      lon: this.longitudeOn,
      lat: this.latitudeOn,
    });
    map.Overlays.add(marker);
    var geom3 = new longdo.Circle(
      {
        lon: this.longitudeOn,
        lat: this.latitudeOn,
      },
      0.0005,
      {
        title: 'บริเวณการเข้าร่วมกิจกรรม',
        detail: '-',
        lineWidth: 1,
        lineColor: 'rgba(0, 255, 0, 0.8)',
        fillColor: 'rgba(0, 255, 0, 0.1)',
        visibleRange: { min: 1, max: 20 },
        editable: true,
      }
    );
    map.Overlays.add(geom3);
  }
}

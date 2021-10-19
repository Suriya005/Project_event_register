import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
declare let longdo: any;

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {

  constructor(private service: EventService) { }

  addLocationForm = new FormGroup({
    location_name: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  })

  editLocationForm = new FormGroup({
    location_old_id: new FormControl(''),
    location_id: new FormControl(''),
    location_name: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  })

  locationData: any
  latitudeOn: any;
  longitudeOn: any;

  ngOnInit(): void {
    this.openMap()
    this.service.getLocation().then((res: any) => {
      console.log(res);
      this.locationData = res
    })
  }

  editModal(data: any){
    this.editLocationForm.controls['location_old_id'].setValue(data.location_id)
    this.editLocationForm.controls['location_id'].setValue(data.location_id)
    this.editLocationForm.controls['location_name'].setValue(data.location_name)
    this.editLocationForm.controls['latitude'].setValue(data.latitude)
    this.editLocationForm.controls['longitude'].setValue(data.longitude)
  }

  addLocation(){
    this.service.postLocation(this.addLocationForm.value).then((res: any) => {
      console.log(res)
      window.location.reload()
    })
  }

  editLocation(){
    this.service.editLocation(this.editLocationForm.value).then((res: any) => {
      console.log(res)
      window.location.reload()
    })
  }

  deleteLocation(data:any){
    this.service.deleteLocation(data).then((res: any)=>{
      console.log(res)
      window.location.reload()
    })
  }

  openMap(){
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
      let map2 = new longdo.Map({
        placeholder: document.getElementById('map2'),
        zoom: 18,
        lastView: false,
        location: {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        },
      });
    });
  }

  checkLocation(data: any){
    this.latitudeOn = data.latitude
    this.longitudeOn = data.longitude
    new longdo.Map({
      placeholder: document.getElementById('map3'),
      zoom: 18,
      lastView: false,
      location: {
        lon: this.longitudeOn,
        lat: this.latitudeOn,
      },
    });
  }

  reMap(){
    window.location.reload();
  }




}

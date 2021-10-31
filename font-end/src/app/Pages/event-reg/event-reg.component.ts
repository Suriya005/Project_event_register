import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { UserEventService } from 'src/app/services/user-event.service';
import Swal from 'sweetalert2';
declare let longdo: any;

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.scss'],
})
export class EventRegComponent implements OnInit {
  public model = {
    editorData: '<p>Hello, world!</p>',
  };
  constructor(private service: UserEventService, private _router: Router) {}
  imageData: any;
  checkLocation: any = false;
  eventData: any = localStorage.getItem('eventData')
  eventDataObj: any = JSON.parse(this.eventData)
  requireData:any={}


  // ตัวแปรของ webcam
  webcamImage: WebcamImage | undefined;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.imageData = this.webcamImage.imageAsBase64;
    this.requireData.image_event = this.webcamImage.imageAsBase64;
    // console.log(this.imageData);
  }

  ngOnInit(): void {
    this.requireData.event_id = this.eventDataObj.event_id
    this.requireData.user_id = localStorage.getItem('userId')
    console.log('latitude-->',this.eventDataObj.latitude)
    console.log('longitude-->',this.eventDataObj.longitude)
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
        // ตำแหน่งผู้ใช้
      let marker1 = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      // ตำแหน่งกิจกรรม
      let marker2 = {
        lat: this.eventDataObj.latitude,
        lon: this.eventDataObj.longitude,
      };

      let distance = longdo.Util.distance([marker1, marker2]);
      console.log(distance);
      if(distance < 50){
        console.log(true);
        this.checkLocation = true;
      }else{
        console.log(distance)
        console.log(false);
          Swal.fire({
            title: 'ตำแหน่งของคุณไม่ถูกต้อง!',
            text: 'กรุณาอยู่ในรัศมีของกิจกรรมที่ระบุไว้ในแผนที่',
            icon: 'warning',
          })
      }
      let map = new longdo.Map({
        placeholder: document.getElementById('map'),
        zoom: 18,
        lastView: false,
        location: {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        },
      });

      let userMarker = new longdo.Marker({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });

      let eventArea = new longdo.Circle(
        {
          lat: this.eventDataObj.latitude,
        lon: this.eventDataObj.longitude
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
      map.Overlays.add(eventArea);
      // map.Overlays.add(userMarker);

      map.Route.mode(longdo.RouteMode.Distance);
      map.Route.add(userMarker);
    map.Route.add({ lat: this.eventDataObj.latitude,
      lon: this.eventDataObj.longitude });
    map.Route.search();

    });
  }
  registerEvent(){
    this.service.userRegisterEvent(this.requireData).then((result: any) => {
      Swal.fire({
        title: 'ลงทะเบียนสำเร็จ',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          this._router.navigate(['home'])
        }})
    });
  }
}

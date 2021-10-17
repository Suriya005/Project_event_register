import { Component, OnInit } from '@angular/core';
declare let longdo: any;

@Component({
  selector: 'app-google-map-apis',
  templateUrl: './google-map-apis.component.html',
  styleUrls: ['./google-map-apis.component.scss'],
})
export class GoogleMapApisComponent implements OnInit {
  mapTest: any;
  constructor() {}

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );

      let map = new longdo.Map({
        placeholder: document.getElementById('map'),
        zoom: 18,
        lastView: false,
        location: {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        },
      });
      
      let marker = new longdo.Marker({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
      let checkPoint = new longdo.Marker({
        lon: position.coords.longitude + 0.0003,
        lat: position.coords.latitude,
      });
      // map.Route.mode(longdo.RouteMode.Walk);
      // map.Route.add(marker);
      // map.Route.add({
      //   lon: position.coords.longitude + 0.0003,
      //   lat: position.coords.latitude,
      // });
      // map.Route.search();
      var marker1 = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      var marker2 = {
        lat: position.coords.latitude + 0.0003,
        lon: position.coords.longitude,
      };
      var distance = longdo.Util.distance([marker1, marker2]);
      console.log(distance);
      if(distance < 50){
        console.log(true);
      }else{
        console.log(false);
      }
      map.Overlays.add(marker);
      map.Overlays.add(checkPoint);
      map.Overlays.bounce(checkPoint);

      // map.zoom(16, true);

      // รัศมีพื้นที่
      var geom3 = new longdo.Circle(
        {
          lon: position.coords.longitude + 0.0003,
        lat: position.coords.latitude,
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
    });
  }
}

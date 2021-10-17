import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.scss']
})
export class EventRegComponent implements OnInit {
  public model = {
    editorData: '<p>Hello, world!</p>'
};
  constructor() { }
  testData:any;
  // ตัวแปรของ webcam
  webcamImage: WebcamImage | undefined ;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
     this.testData = this.webcamImage;
     console.log(this.testData)
     
  }

  ngOnInit(): void {
  }

  

}

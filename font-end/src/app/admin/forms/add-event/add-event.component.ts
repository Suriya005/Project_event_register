import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  addEvent = new FormGroup({
    location: new FormControl('', [Validators.required, Validators.minLength(2)]),
    eventName: new FormControl(''),
    eventStatus: new FormControl(''),
    eventDescription: new FormControl(''),
    startEvent: new FormControl(''),
    endEvent: new FormControl('')
  });

  ngOnInit(): void {

  }

  add() {
    console.log(this.addEvent.value);
    // this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }


}

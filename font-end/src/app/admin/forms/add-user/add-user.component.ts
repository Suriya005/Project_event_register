import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private eventService: EventService,
    ) { }

  major:any

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    major: new FormControl(''),
  });
  ngOnInit(): void {
    this.eventService.getMajor().then((res:any)=>{
      this.major = res
    })
    
  }

  register() {
    console.log(this.registerForm.value);
    this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
      console.log(res);
    })
  }

}


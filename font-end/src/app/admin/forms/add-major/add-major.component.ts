import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.component.html',
  styleUrls: ['./add-major.component.scss']
})
export class AddMajorComponent implements OnInit {

  constructor(private eventService: EventService) { }

  majorList:any;

  addMajor = new FormGroup({
    majorName: new FormControl(''),
    facultyName: new FormControl(''),
  });

  ngOnInit(): void {
    this.eventService.getFaculty().then((res:any)=>{
      this.majorList = res;
      console.log(res);
    })
  }
  add() {
    console.log(this.addMajor.value);
    // this.eventService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }

}

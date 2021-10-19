import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss'],
})
export class AddFacultyComponent implements OnInit {
  constructor(private eventService: EventService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  facultyList: any;
  checkFaculty: boolean = true;

  addFaculty = new FormGroup({
    facultyName: new FormControl(''),
  });

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.eventService.getFaculty().then((res: any) => {
      this.facultyList = res;
      console.log(res);
    });
  }

  async add() {
    let f = true;
    await this.facultyList.forEach((element: any) => {

      if (element.faculty_name == this.addFaculty.value.facultyName) {
        f = false;
        console.log(element.faculty_name, f)
      } 
    });

    if (f === true) {
      this.eventService.postFaculty(this.addFaculty.value).then((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'เพิ่มข้อมูลสำเร็จ',
          timer: 1500,
        });
      });
      setTimeout(() =>{
        // f = true
        window.location.reload();
      },2000)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'เพิ่มข้อมูลไม่สำเร็จ',
        timer: 1500,
      });
    }
    
  }

}

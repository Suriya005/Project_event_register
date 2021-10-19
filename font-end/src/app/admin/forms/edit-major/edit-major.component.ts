import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-major',
  templateUrl: './edit-major.component.html',
  styleUrls: ['./edit-major.component.scss']
})
export class EditMajorComponent implements OnInit {

  constructor(private service: EventService) { }

  facultyData: any
  majorData:any

  addMajorForm= new FormGroup({ 
    major_name: new FormControl('')
  })

  editMajorForm= new FormGroup({ 
    major_old_id: new FormControl(''),
    major_id: new FormControl(''),
    major_name: new FormControl('')
  })

  

  ngOnInit(): void {
    this.service.getFaculty().then((res: any) => {
      
      this.facultyData = res;
      console.log(this.facultyData)
    })
    this.service.getMajor().then((res: any) => {
      
      this.majorData = res;
      console.log("major --->",this.majorData)
    })
  }

  editModal(data: any){

  }
  addMajor(){

  }

  editMajor(){

  }

  deleteMajor(data: any){

  }

}

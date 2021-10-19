import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.scss']
})
export class EditFacultyComponent implements OnInit {

  constructor(private service: EventService) { }

  facultyData: any

  addFacultyForm = new FormGroup({
    faculty_name: new FormControl(''),
  })

  editFacultyForm = new FormGroup({
    faculty_old_id: new FormControl(''),
    faculty_id: new FormControl(''),
    faculty_name: new FormControl(''),
  })

  ngOnInit(): void {
    this.service.getFaculty().then((res:any)=>{
      this.facultyData = res
      console.log(this.facultyData)
    })
  }

  editModal(data: any){
    this.editFacultyForm.controls['faculty_old_id'].setValue(data.faculty_id)
    this.editFacultyForm.controls['faculty_id'].setValue(data.faculty_id)
    this.editFacultyForm.controls['faculty_name'].setValue(data.faculty_name)
  }
  editFaculty(){
    console.log(this.editFacultyForm.value)
    this.service.editFaculty(this.editFacultyForm.value).then((res:any)=>{
      console.log(res)
      window.location.reload()
    })
  }

  deleteFaculty(data: any){
    console.log(data)
    this.service.deleteFaculty(data).then((res:any)=>{
      console.log(res)
      window.location.reload()
    })
  }
  addFaculty(){
    this.service.postFaculty(this.addFacultyForm.value).then((res:any)=>{
      console.log(res)
      window.location.reload()
    })
  }


}

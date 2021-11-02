import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'แก้ไขสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }})
    })
  }

  deleteFaculty(data: any){
    Swal.fire({
      title: 'ลบบัญชี',
      text: 'คุณต้องการลบบัญชีนี้ ใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ไม่ใช่',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteFaculty(data).then((res: any) => {
          Swal.fire({
            title: 'ลบสำเร็จ!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }})
          
        });
        
      }
    });

  }
  addFaculty(){
    this.service.postFaculty(this.addFacultyForm.value).then((res:any)=>{
      Swal.fire({
        title: 'เพิ่มสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }})
    })
  }


}

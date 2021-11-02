import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

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
    major_name: new FormControl(''),
    faculty_id: new FormControl('')
  })

  editMajorForm= new FormGroup({ 
    major_old_id: new FormControl(''),
    major_id: new FormControl(''),
    major_name: new FormControl(''),
    faculty_id: new FormControl('')
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
    this.editMajorForm.controls['major_old_id'].setValue(data.major_id)
    this.editMajorForm.controls['major_id'].setValue(data.major_id)
    this.editMajorForm.controls['major_name'].setValue(data.major_name)
    this.editMajorForm.controls['faculty_id'].setValue(data.faculty_id)
  }
  addMajor(){
    console.log(this.addMajorForm.value)
    this.service.postMajor(this.addMajorForm.value).then((res: any) => {
      Swal.fire({
        title: 'เพิ่มสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }})
    })
  }

  editMajor(){
    this.service.editMajor(this.editMajorForm.value).then((res: any) => {
      Swal.fire({
        title: 'แก้ไขสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }})
    })
  }

  deleteMajor(data: any){
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
        this.service.deleteMajor(data).then((res: any) => {
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
  

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})


export class EditUserComponent implements OnInit {


  constructor(
    private loginService: LoginService,
    private eventService: EventService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    ) { }
    

  major:any
  userData:any
  searchData:any = ""
  dataSearch:any ={}

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

  editForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    userStatus: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    major: new FormControl(''),
  });

  

  ngOnInit(): void {
    this.eventService.getMajor().then((res:any)=>{
      this.major = res
    })
    this.changeSearch()
  }
  deleteModal(tmp:any){

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
        this.loginService.deleteUser(tmp).then((res:any)=>{
          console.log(res)
        Swal.fire({
          title: 'ลบสำเร็จ!',
          icon: 'success',
          timer: 2000,
        });
        })
        this.changeSearch()
      }
    });
    
  }

  onSearch(){
    this.loginService.getUser(localStorage.getItem('token')).subscribe((res:any)=>{
      this.userData = res
    })
  }
  changeSearch(){
    this.dataSearch = {
      token: localStorage.getItem('token'),
      searchData: this.searchData
    }
    this.loginService.getUserOnChange(this.dataSearch).then((res:any)=>{
      this.userData = res
    })
  }

  register() {
    try {
    this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
      console.log(res);
      this.clearForm()
      Swal.fire({
        title: 'เพิ่มสำเร็จ!',
        text: res.msg,
        icon: 'success',
        timer: 1500,
      });
      setTimeout(()=>{
        this.changeSearch()
      },2000)
    })
    } catch (error) {
      console.log("register fail")
    }
  }

  editUser(){
    try {
      this.loginService.updateUser(this.editForm.value).then((res:any)=>{
        this.clearForm()
        Swal.fire({
          title: 'แก้ไขสำเร็จ!',
          text: res.msg,
          icon: 'success',
          timer: 1500,
        });
        setTimeout(()=>{
          this.changeSearch()
        },2000)
      })
      } catch (error) {
        console.log("register fail")
      }
  }

  editModal(tmp:any){
    console.log(tmp)
    this.editForm.controls['userId'].setValue(tmp.user_id);
    this.editForm.controls['password'].setValue(tmp.password);
    this.editForm.controls['titleName'].setValue(tmp.title_name);
    this.editForm.controls['fname'].setValue(tmp.fname);
    this.editForm.controls['lname'].setValue(tmp.lname);
    this.editForm.controls['userStatus'].setValue(tmp.user_status);
    this.editForm.controls['birthDay'].setValue(tmp.birthday);
    this.editForm.controls['sex'].setValue(tmp.sex);
    this.editForm.controls['major'].setValue(tmp.major_id);
  }

  clearForm(){
    this.registerForm.controls['userId'].setValue('');
    this.registerForm.controls['password'].setValue('');
    this.registerForm.controls['titleName'].setValue('');
    this.registerForm.controls['fname'].setValue('');
    this.registerForm.controls['lname'].setValue('');
    this.registerForm.controls['birthDay'].setValue('');
    this.registerForm.controls['sex'].setValue('');
    this.registerForm.controls['major'].setValue('');
  }


}
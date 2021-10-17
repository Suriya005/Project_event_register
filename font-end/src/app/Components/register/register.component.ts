import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService) {}


  department = [
    { name: 'สาขาบริหารธุรกิจ', value: 1},
    { name: 'สาขาบัญชี', value: 1},
    { name: 'สาขาวิทยาการคอมพิวเตอร์', value: 1},
    { name: 'สาขารัฐประศาสนศาสตร์', value: 1},
    { name: 'สาขาธุรกิจการบินและการขนส่งทางอากาศ', value: 1},
    { name: 'สาขานิเทศศาสตร์', value: 1},
  ];

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    department: new FormControl(''),
  });


  ngOnInit() {

  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
      console.log(res);
    })
  }
}

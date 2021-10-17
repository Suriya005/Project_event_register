import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // constructor
  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
  });

  // on init
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.checkStatus();
    }
  }

  // my function
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((res: any) => {
          if (!res.errorMessage) {
            localStorage.setItem('userId', this.loginForm.value.userId);
            localStorage.setItem('token', res.userToken.toString());
            Swal.fire({
              icon: 'success',
              title: 'เข้าสู่ระบบสำเร็จ',
              timer: 1500,
            });
            this.checkStatus();
          } else {
            Swal.fire({
              icon: 'error',
              title: `เข้าสู่ระบบไม่สำเร็จ`,
              text: `${res.errorMessage}`,
              timer: 2500,
            });
          }
        });
    }
  }

  checkStatus() {
    this.loginService
      .verifyToken({ token: localStorage.getItem('token') })
      .then((result: any) => {
        console.log(result);
        if (result.status == 'A') {
          this._router.navigate(['/admin']);
          console.log('navigate Admin');
        } else if (result.status == 'M') {
          this._router.navigate(['/home']);
          console.log('navigate User');
        } else {
          console.log('err');
          return;
        }
      });
  }
}

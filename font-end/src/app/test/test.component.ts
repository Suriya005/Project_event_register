import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private loginService: LoginService) {}
   token = localStorage.getItem('token');
  ngOnInit(): void {
    this.loginService.getUser(this.token).subscribe((res: any) => {
      console.log(res);
    });
     
  }
}
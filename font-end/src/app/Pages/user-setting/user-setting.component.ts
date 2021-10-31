import { Component, OnInit } from '@angular/core';
import { UserEventService } from 'src/app/services/user-event.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {

  constructor(private userService: UserEventService) { }

  getUserId:any = localStorage.getItem('userId')
  userData:any 
  registerData:any
  answerData:any

  ngOnInit(): void {
    this.userService.getUserById(this.getUserId).then((res: any)=>{
      console.log(res)
      this.userData = res
    })
    this.userService.checkRegisterByUser(this.getUserId).then((res: any)=>{
      console.log(res)
      this.registerData = res
    })
    this.userService.checkAnswerByUser(this.getUserId).then((res: any)=>{
      console.log(res)
      this.answerData = res
    })
    
  }
  

}

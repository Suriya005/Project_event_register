import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UserEventService } from 'src/app/services/user-event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-feedback-list',
  templateUrl: './event-feedback-list.component.html',
  styleUrls: ['./event-feedback-list.component.scss']
})
export class EventFeedbackListComponent implements OnInit {
  constructor(private eventService: EventService, private _router: Router, private userService: UserEventService) { }
  eventList: any;
  getUserId: any = localStorage.getItem('userId')
  ngOnInit(): void {
    this.eventService.getEvent().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });

  }

  takeAsnwer(eventData: any) {
    const toCheckEvent = { event_id: eventData.event_id, user_id: this.getUserId }
    const toCheckAnswer = { question_id: eventData.question_id, user_id: this.getUserId }
    this.userService.checkEvent(toCheckEvent).then((res: any) => {
      if (res.eventStatus == true) {
        Swal.fire({
          title: 'คุณยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม!',
          text: 'กดปุ่ม ตกลง เพื่อเข้าสู่หน้าลงทะเบียนกิจกรรม',
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/event-feedback-list']);
          }
        })
      } else {
        this.userService.checkAnswer(toCheckAnswer).then((res: any) => {
          console.log(res.eventStatus)
          if (res.eventStatus == true) {
            Swal.fire({
              title: 'คุณตอบแบบประเมินนี้ไปแล้ว!',
              text: 'กดปุ่ม ตกลง เพื่อเข้าสู่หน้าแรก',
              icon: 'warning',
            }).then((result) => {
              if (result.isConfirmed) {
                this._router.navigate(['/home']);
              }
            })
          } else {
            localStorage.setItem('eventData', JSON.stringify(eventData))
            this._router.navigate(['event-feedback'])
          }
        })
      }
    })



  }
}

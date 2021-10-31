import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserEventService } from 'src/app/services/user-event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  constructor(private _router: Router, private service: UserEventService) {}

  eventData: any;
  eventClient: any = localStorage.getItem('eventData') 
  eventClientDecode: any = JSON.parse(this.eventClient)
  getUserId: any = localStorage.getItem('userId')

  //  date: any = new Date()
//  result: any = this.date.toLocaleDateString('th-TH', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// })

  ngOnInit(): void {
    console.log(this.eventClientDecode.event_start)
    // console.log(this.result)
    
  }
  test() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  back() {
    this._router.navigate(['/event-list']);
  }

  takeRegisterEvent() {

    const toCheck = {event_id:this.eventClientDecode.event_id, user_id:this.getUserId}
    console.log(toCheck)
    this.service.checkEvent(toCheck).then((res:any)=>{
      if(res.eventStatus == false) {
        Swal.fire({
          title: 'คุณได้ลงทะเบียนกิจกรรมนี้ไปแล้ว!',
          text: 'กดปุ่ม ตกลง เพื่อกลับไปหน้าแรก',
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/event-detail']);
          }})
      }else{
        this._router.navigate(['/event-reg']);
      }
    })
  }

  takeAsnwer() {
    const toCheckEvent = { event_id: this.eventClientDecode.event_id, user_id: this.getUserId }
    const toCheckAnswer = { question_id: this.eventClientDecode.question_id, user_id: this.getUserId }
    this.service.checkEvent(toCheckEvent).then((res: any) => {
      if (res.eventStatus == true) {
        Swal.fire({
          title: 'คุณยังไม่ได้ลงทะเบียนเข้าร่วมกิจกรรม!',
          text: 'กดปุ่ม ตกลง เพื่อเข้าสู่หน้าลงทะเบียนกิจกรรม',
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/event-detail']);
          }
        })
      } else {
        this.service.checkAnswer(toCheckAnswer).then((res: any) => {
          console.log(res.eventStatus)
          if (res.eventStatus == true) {
            Swal.fire({
              title: 'คุณตอบแบบประเมินนี้ไปแล้ว!',
              text: 'กดปุ่ม ตกลง เพื่อเข้าสู่หน้าแรก',
              icon: 'warning',
            }).then((result) => {
              if (result.isConfirmed) {
                this._router.navigate(['/event-detail']);
              }
            })
          } else {
            this._router.navigate(['event-feedback'])
          }
        })
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserEventService } from 'src/app/services/user-event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-reg-list',
  templateUrl: './event-reg-list.component.html',
  styleUrls: ['./event-reg-list.component.scss']
})
export class EventRegListComponent implements OnInit {

  constructor(private eventService: EventService, private _router: Router, private userService: UserEventService) {}
  eventList: any;
  getUserId: any = localStorage.getItem('userId')
  ngOnInit(): void {
    this.eventService.getEvent().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  goEventReg(eventData:any) {
    const toCheck = {event_id:eventData.event_id,user_id:this.getUserId}
    this.userService.checkEvent(toCheck).then((res:any)=>{
      if(res.eventStatus == false) {
        Swal.fire({
          title: 'คุณได้ลงทะเบียนกิจกรรมนี้ไปแล้ว!',
          text: 'กดปุ่ม ตกลง เพื่อกลับไปหน้าแรก',
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/event-reg-list']);
          }})
      }else{
        localStorage.setItem('eventData',JSON.stringify(eventData))
        this._router.navigate(['/event-reg']);
      }
    })



    
  }
}

import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { UserEventService } from 'src/app/services/user-event.service';

@Component({
  selector: 'app-event-feedback',
  templateUrl: './event-feedback.component.html',
  styleUrls: ['./event-feedback.component.scss']
})
export class EventFeedbackComponent implements OnInit {

  constructor(private userService: UserEventService) { }
  eventData: any = localStorage.getItem('eventData');
  eventDataObj: any = JSON.parse(this.eventData)
  question:any

  ngOnInit(): void {
    console.log(this.eventDataObj.event_id)
    this.userService.userGetQuestionById(this.eventDataObj.event_id).then((res: any) => {
      console.log(JSON.stringify(res[0]))
      this.question = res[0].question
    })
  }

}

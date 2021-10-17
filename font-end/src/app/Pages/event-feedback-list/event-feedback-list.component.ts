import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-feedback-list',
  templateUrl: './event-feedback-list.component.html',
  styleUrls: ['./event-feedback-list.component.scss']
})
export class EventFeedbackListComponent implements OnInit {
  constructor(private eventService: EventService) {}
  eventList: any;
  ngOnInit(): void {
    this.eventService.getEventList().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  testSubmit() {
    console.log('testSubmit');
  }
}

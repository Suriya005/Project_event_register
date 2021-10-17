import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-reg-list',
  templateUrl: './event-reg-list.component.html',
  styleUrls: ['./event-reg-list.component.scss']
})
export class EventRegListComponent implements OnInit {

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

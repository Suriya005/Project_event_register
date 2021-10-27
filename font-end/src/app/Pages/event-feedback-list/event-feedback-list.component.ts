import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-feedback-list',
  templateUrl: './event-feedback-list.component.html',
  styleUrls: ['./event-feedback-list.component.scss']
})
export class EventFeedbackListComponent implements OnInit {
  constructor(private eventService: EventService , private _router: Router) {}
  eventList: any;
  ngOnInit(): void {
    this.eventService.getEvent().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  onSubmit() {
    this._router.navigate(['event-feedback'])
    console.log('testSubmit');
  }
}

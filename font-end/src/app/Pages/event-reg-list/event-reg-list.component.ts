import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-reg-list',
  templateUrl: './event-reg-list.component.html',
  styleUrls: ['./event-reg-list.component.scss']
})
export class EventRegListComponent implements OnInit {

  constructor(private eventService: EventService, private _router: Router) {}
  eventList: any;
  ngOnInit(): void {
    this.eventService.getEvent().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  goEventReg(eventData:any) {
    localStorage.setItem('eventData',JSON.stringify(eventData))
    this._router.navigate(['/event-reg']);
  }
}

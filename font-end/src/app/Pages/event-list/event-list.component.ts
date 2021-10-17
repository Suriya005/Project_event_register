import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService,
    private _router:Router) {}
  eventList: any;
  ngOnInit(): void {
    this.eventService.getEventList().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  goEventDetail(eventData:any) {
    console.log(eventData.event_name);
    localStorage.setItem('eventData',eventData)
    this._router.navigate(['/event-detail']);
  }

  back(){
    this._router.navigate(['/home']);
  }
}

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
    this._router.navigate(['event-reg'])
  }

  takeAsnwer() {
    this._router.navigate(['event-feedback'])
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  constructor(private eventService: EventService) {}

  addEventForm = new FormGroup({
    event_id: new FormControl(''),
    location_id: new FormControl(''),
    event_name: new FormControl(''),
    event_status: new FormControl(''),
    event_descr: new FormControl(''),
    event_start: new FormControl(''),
    event_end: new FormControl(''),
  })

  eventData: any;
  locationData: any;

  ngOnInit(): void {
    this.getEvent();
    this.eventService.getLocation().then((res: any)=>{
      this.locationData = res
    })
  }

  getEvent() {
    this.eventService.getEvent().then((res: any) => {
      this.eventData = res;
      console.log(res);
    });
  }

  addEvent() {
    console.log(this.addEventForm.value);
    this.eventService.postEvent(this.addEventForm.value).then((res: any) => {
      console.log(res)
    })
  }

  editEvent() {}

  deleteEvent(data: any) {
    Swal.fire({
      title: 'ลบบัญชี',
      text: 'คุณต้องการลบบัญชีนี้ ใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ไม่ใช่',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEvent(data).then((res: any) => {
          console.log(res);
          Swal.fire({
            title: 'ลบสำเร็จ!',
            icon: 'success',
            timer: 2000,
          });
        });
        window.location.reload();
      }
    });
  }

  editModal(data: any) {

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {

  constructor(private eventService: EventService,   private _router: Router) {}

  addEventForm = new FormGroup({
    event_id: new FormControl(''),
    location_id: new FormControl(''),
    event_name: new FormControl(''),
    event_status: new FormControl(''),
    event_descr: new FormControl(''),
    event_start: new FormControl(''),
    event_end: new FormControl(''),
  })

  editEventForm = new FormGroup({
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
    this.eventService.getEventAdmin().then((res: any) => {
      console.log(res)
      this.eventData = res;
    });
    this.eventService.getLocation().then((res: any)=>{
      this.locationData = res
    })
  }

  editModal(data: any) {
    this.editEventForm.controls['event_id'].setValue(data.event_id);
    this.editEventForm.controls['location_id'].setValue(data.location_id);
    this.editEventForm.controls['event_name'].setValue(data.event_name);
    this.editEventForm.controls['event_status'].setValue(data.event_status);
    this.editEventForm.controls['event_descr'].setValue(data.event_descr);
    this.editEventForm.controls['event_start'].setValue(data.event_start);
    this.editEventForm.controls['event_end'].setValue(data.event_end);
  }

  // getEvent() {
  //   this.eventService.getEvent().then((res: any) => {
  //     this.eventData = res;
  //   });
  // }

  addEvent() {
    
    this.eventService.postEvent(this.addEventForm.value).then((res: any) => {
      Swal.fire({
        title: 'ลบสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
          // this._router.navigate(['admin/edit_event'])
        }})
    })
  }

  editEvent() {
    this.eventService.editEvent(this.editEventForm.value).then((res: any) => {
      Swal.fire({
        title: 'ลบสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          // this._router.navigate(['admin/edit_event'])
          window.location.reload()
        }})
    })
  }

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
          Swal.fire({
            title: 'ลบสำเร็จ!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              // this._router.navigate(['admin/edit_event'])
              window.location.reload()
            }})
          
        });
        
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-reg-event',
  templateUrl: './edit-reg-event.component.html',
  styleUrls: ['./edit-reg-event.component.scss']
})
export class EditRegEventComponent implements OnInit {

  constructor(private service: EventService) { }

  registerEventData:any

  addRegisterEventForm = new FormGroup({
    user_id: new FormControl(''),
    event_id: new FormControl(''),
    status_event: new FormControl(''),
    image_event: new FormControl(''),
    reg_time: new FormControl('')
  })

  editRegisterEventForm = new FormGroup({
    old_user_id: new FormControl(''),
    user_id: new FormControl(''),
    event_id: new FormControl(''),
    status_event: new FormControl(''),
    image_event: new FormControl(''),
    reg_time: new FormControl('')
  })

  ngOnInit(): void {
    this.service.getRegEvent().then((res: any) => {
      console.log(res)
      this.registerEventData = res
    })
  }

  editModal(data: any){
    console.log(data)
    this.editRegisterEventForm.controls['old_user_id'].setValue(data.user_id)
    this.editRegisterEventForm.controls['user_id'].setValue(data.user_id)
    this.editRegisterEventForm.controls['event_id'].setValue(data.event_id)
    this.editRegisterEventForm.controls['status_event'].setValue(data.status_event)
    this.editRegisterEventForm.controls['image_event'].setValue(data.image_event)
    this.editRegisterEventForm.controls['reg_time'].setValue(data.reg_time)
  }
  editRegisterEvent(){
   console.log(this.editRegisterEventForm.controls['image_event'].value)
   this.service.editRegEvent(this.editRegisterEventForm.value).then((res: any) => {
     console.log(res)
   })
  }

  deleteModal(data: any){
    console.log(data)
    this.service.deleteRegEvent(data).then((res: any)=>{
      console.log(res)
    })
  }
  addRegisterEvent(){
    console.log(this.addRegisterEventForm.value)
    this.service.postRegEvent(this.addRegisterEventForm.value).then((res: any) => {
      console.log(res)
    })
  }

}

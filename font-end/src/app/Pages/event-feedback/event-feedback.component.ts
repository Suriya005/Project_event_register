import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UserEventService } from 'src/app/services/user-event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-feedback',
  templateUrl: './event-feedback.component.html',
  styleUrls: ['./event-feedback.component.scss'],
})
export class EventFeedbackComponent implements OnInit {
  constructor(private userService: UserEventService, private _router: Router) {}
  getUserId:any = localStorage.getItem('userId')
  eventData: any = localStorage.getItem('eventData');
  eventDataObj: any = JSON.parse(this.eventData);
  question: any;
  questionId: any;

  answerTmp: any = [];
  answerForm = new FormGroup({
    question_id: new FormControl(''),
    user_id: new FormControl(''),
    answer: new FormControl(''),
    feedback: new FormControl('')
  });

  ngOnInit(): void {
    console.log(this.getUserId)
    console.log(this.eventDataObj);
    this.userService
      .userGetQuestionById(this.eventDataObj.event_id)
      .then((res: any) => {
        this.question = res[0].question;
        this.answerTmp = new Array(this.question.length);
      });
  }

  fillAnswer(data: any) {
    this.answerTmp.fill(data.answer, data.question, data.question + 1);
    // console.log((data))
    // console.log('fill', this.answer)
  }

  sendAnswer(){

    
    this.answerForm.controls['question_id'].setValue(this.eventDataObj.question_id)
    this.answerForm.controls['user_id'].setValue(this.getUserId)
    this.answerForm.controls['answer'].setValue(this.answerTmp)
    console.log(this.answerForm.value)
    this.userService.addAnswer(this.answerForm.value).then((res: any) => {
      console.log(res)
      Swal.fire({
        title: 'ตอบแบบประเมินสำเร็จ!',
        text: 'กดปุ่ม ตกลง เพื่อเข้าสู่หน้าแรก',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          this._router.navigate(['home'])
        }})
    })
    

  }

  cancel(){
    this._router.navigate(['event-feedback-list'])
  }
}

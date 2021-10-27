import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.scss']
})
export class EditAnswerComponent implements OnInit {

  constructor(private service: EventService) { }

  answerData:any

  addAnswerForm = new FormGroup({
    question_id: new FormControl(''),
    user_id: new FormControl(''),
    answer: new FormControl([]),
    feedback: new FormControl(''),
    answer_status: new FormControl(''),
    answer_time: new FormControl('')
  })

  editAnswerForm = new FormGroup({
    old_question_id: new FormControl(''),
    old_user_id: new FormControl(''),
    question_id: new FormControl(''),
    user_id: new FormControl(''),
    answer: new FormControl(''),
    feedback: new FormControl(''),
    answer_status: new FormControl(''),
    answer_time: new FormControl('')
  })

  ngOnInit(): void {
    this.service.getAnswer().then((res: any) => {
      
      this.answerData = res
      console.log(this.answerData)
    })
  }

  editModal(data: any){
    this.editAnswerForm.controls['old_question_id'].setValue(data.question_id)
    this.editAnswerForm.controls['old_user_id'].setValue(data.user_id)
    this.editAnswerForm.controls['question_id'].setValue(data.question_id)
    this.editAnswerForm.controls['user_id'].setValue(data.user_id)
    this.editAnswerForm.controls['answer'].setValue(data.answer)
    this.editAnswerForm.controls['feedback'].setValue([data.feedback])
    this.editAnswerForm.controls['answer_status'].setValue(data.answer_status)
    this.editAnswerForm.controls['answer_time'].setValue(data.answer_time)
  }

  deleteModal(data:any){
    this.service.deleteAnswer(data).then((res:any)=>{
    console.log(res)
    })
  }

  addAnswer(){
    this.service.postAnswer(this.addAnswerForm.value).then((res:any)=>{
      console.log(res)
    })
  }

  editAnswer(){
    this.service.editAnswer(this.editAnswerForm.value).then((res: any) => {
      console.log(res)
    })
  }

}

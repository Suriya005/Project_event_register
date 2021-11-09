import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  constructor(private service: EventService , private _router: Router) { }

  addQuestionForm = new FormGroup({
    question_id: new FormControl(''),
    event_id: new FormControl(''),
    question_status: new FormControl(''),
    question_start: new FormControl(''),
    question_end: new FormControl(''),
    question: new  FormControl(''),
    createQuestion: new FormControl(''),
    questionNum: new FormControl(''),
    questionName: new FormControl('')
  })
  editQuestionForm = new FormGroup({
    question_old_id: new FormControl(''),
    question_id: new FormControl(''),
    event_id: new FormControl(''),
    question_status: new FormControl(''),
    question_start: new FormControl(''),
    question_end: new FormControl(''),
    question: new  FormControl(''),
    createQuestion: new FormControl(''),
    questionNum: new FormControl(''),
    questionName: new FormControl('')
  })

  questionData:any
  eventData:any
  eventQuestion: any = [];

  ngOnInit(): void {
    
    this.service.getQuestion().then((res: any) => {
      this.questionData = res;
      console.log(res);
    })
    this.service.getEventAdmin(localStorage.getItem('token')).then((res: any)=>{
      this.eventData = res;
      console.log(this.eventData);
    })


  

  }

  addModal(){
    this.eventQuestion = []
  }

  editModal(data:any){
    this.editQuestionForm.controls['question_old_id'].setValue(data.question_id)
    this.editQuestionForm.controls['question_id'].setValue(data.question_id)
    this.editQuestionForm.controls['event_id'].setValue(data.event_id)
    this.editQuestionForm.controls['question_status'].setValue(data.question_status)
    this.editQuestionForm.controls['question_start'].setValue(data.question_start)
    this.editQuestionForm.controls['question_end'].setValue(data.question_end)
    this.editQuestionForm.controls['question'].setValue(data.question)
    this.eventQuestion = data.question
  }

  deleteQuestion(data:any){
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
        this.service.deleteQuestion(data).then((res: any) => {
          Swal.fire({
            title: 'ลบสำเร็จ!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.reload()
              this.ngOnInit()
            }})
          
        });
        
      }
    });
  }
  async addQuestion(){
    await this.addQuestionForm.controls['question'].setValue(this.eventQuestion)
    console.log(this.addQuestionForm.value)
    await this.service.postQuestion(this.addQuestionForm.value).then((res: any) => {
      Swal.fire({
        title: 'เพิ่มสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          // window.location.reload()
          this.ngOnInit()
        }})
    })
    
  }
  
  async onCreateQuestion(){
    await this.eventQuestion.push(this.addQuestionForm.value.createQuestion);
    console.log(this.eventQuestion);
    await this.addQuestionForm.controls['createQuestion'].setValue('')
  }
  onAdd(){
    console.log(this.addQuestionForm.value)
    if (-1 > this.addQuestionForm.value.questionNum || this.addQuestionForm.value.questionNum < this.eventQuestion.length + 1 ) {
      this.eventQuestion.fill(this.addQuestionForm.value.questionName, Number(this.addQuestionForm.value.questionNum) - 1, Number(this.addQuestionForm.value.questionNum) );
    }else{
      console.log('this value is more then maximum')
    }
  }

  onCreateQuestionEdit(){
    this.eventQuestion.push(this.editQuestionForm.value.createQuestion);
    console.log(this.eventQuestion);
  }

  onEdit(){
    console.log(this.editQuestionForm.value)
    if (-1 > this.editQuestionForm.value.questionNum || this.editQuestionForm.value.questionNum < this.eventQuestion.length + 1 ) {
      this.eventQuestion.fill(this.editQuestionForm.value.questionName, Number(this.editQuestionForm.value.questionNum) - 1, Number(this.editQuestionForm.value.questionNum) );
    }else{
      console.log('this value is more then maximum')
    }


  }

  editQuestion(){
    this.editQuestionForm.controls['question'].setValue(this.eventQuestion)
    console.log(this.editQuestionForm.value)
    this.service.editQuestion(this.editQuestionForm.value).then((res: any) => {
      Swal.fire({
        title: 'แก้ไขสำเร็จ!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          // window.location.reload()
          this.ngOnInit()
        }})
    })
  }

}

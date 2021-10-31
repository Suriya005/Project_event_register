import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  constructor(private http: HttpClient) { }

  getEventByEventId(data: any){
    return this.http.post(environment.serverUrl + `/user/event`,data).toPromise();
  }
  
  userRegisterEvent(data: any){
    return this.http.post(environment.serverUrl + `/user/register_event`,data).toPromise();
  }
  

  userGetQuestionById(data: any){
    return this.http.post(environment.serverUrl + `/user/question`,data).toPromise();
  }

  addAnswer(data: any){
    return this.http.post(environment.serverUrl + `/user/feedback`,data).toPromise();
  }

  checkEvent(data: any){
    return this.http.post(environment.serverUrl + `/user/check_event`,data).toPromise();
  }
  
  checkAnswer(data: any){
    return this.http.post(environment.serverUrl + `/user/check_answer`,data).toPromise();
  }

  getUserById(data: any){
    return this.http.post(environment.serverUrl + `/user/user`,data).toPromise();
  }

  checkRegisterByUser(data: any){
    return this.http.post(environment.serverUrl + `/user/report_event`,data).toPromise();
  }

  checkAnswerByUser(data: any){
    return this.http.post(environment.serverUrl + `/user/report_answer`,data).toPromise();
  }

  

  

  

  

}

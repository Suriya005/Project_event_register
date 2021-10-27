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
    return this.http.post(environment.serverUrl + `/user/feedback`,data).toPromise();
  }

}
